import { useEffect, useState } from 'react';

export type ProjectStatus = 'checking' | 'online' | 'offline';

export function useProjectStatus(url?: string) {
  const [status, setStatus] = useState<ProjectStatus>('checking');

  useEffect(() => {
    if (!url) return;

    let cancelled = false;

    function check() {
      const img = new Image();
      img.src = url + '/favicon.ico?cache=' + Date.now();

      img.onload = () => {
        if (!cancelled) setStatus('online');
      };

      img.onerror = () => {
        if (!cancelled) setStatus('offline');
      };
    }

    check();
    const interval = setInterval(check, 60000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [url]);

  return status;
}

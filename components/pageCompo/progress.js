// components/ProgressBar.js
import NProgress from 'nprogress';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';

const ProgressBar = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const start = () => {
        setProgress(0);
        setLoading(true);
      };
  
      const done = () => {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      };
  
      router.events.on('routeChangeStart', start);
      router.events.on('routeChangeComplete', done);
      router.events.on('routeChangeError', done);
  
      return () => {
        router.events.off('routeChangeStart', start);
        router.events.off('routeChangeComplete', done);
        router.events.off('routeChangeError', done);
      };
    }, []);
  
    useEffect(() => {
      let timer;
  
      if (loading) {
        timer = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress < 90) {
              const randomIncrement = Math.random() * 5; // Simulate random progress
              return Math.min(prevProgress + randomIncrement, 90); // Cap progress at 90%
            }
            return prevProgress;
          });
        }, 100);
      }
  
      return () => {
        clearInterval(timer);
      };
    }, [loading]);
//   useEffect(()=>{
//     console.log(progress)
//   },[progress])
  return <>
    <div className="progress-bar-container" style={{ display: loading ? 'block' : 'none' }}>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  </>; // This component doesn't render anything visible
};

export default ProgressBar;
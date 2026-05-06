// ============================================================
// tryoutofhours.com — Tracking Configuration
// ============================================================

// --- Facebook Pixel ---
// Replace with your actual Pixel ID from Meta Business Manager
const FB_PIXEL_ID = '981200371161948';

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

if (FB_PIXEL_ID !== 'YOUR_FB_PIXEL_ID') {
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');
}

// --- Google Analytics 4 ---
const GA4_MEASUREMENT_ID = 'G-9VLHGEM257';

(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID);
})();

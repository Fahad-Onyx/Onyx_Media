/**
 * VIDEO CONFIGURATION
 * ===================
 * Replace the placeholder IDs below with your actual Google Drive file IDs.
 * 
 * How to get your File ID:
 * 1. Right-click video in Google Drive -> Share -> "Anyone with link can view"
 * 2. Copy link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * 3. Your File ID is the part between /d/ and /view
 * 
 * Paste your File IDs in the url fields below.
 * The format should be: https://drive.google.com/file/d/YOUR_ID/preview
 */

const VIDEOS = {
  documentary: [
    { id:"doc-1", title:"The Untold Story",      category:"Documentary", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"doc-2", title:"Behind the Lens",       category:"Documentary",       url:"https://drive.google.com/file/d/YOUR_SPORT_ID_1/preview" },
    { id:"doc-3", title:"Voices Unheard",        category:"Documentary",       url:"https://drive.google.com/file/d/YOUR_SPORT_ID_1/preview", duration:"15:20" },
    { id:"doc-4", title:"Earth's Last Frontier", category:"Documentary",       url:"https://drive.google.com/file/d/YOUR_SPORT_ID_1/preview", duration:"22:10" }
  ],
  sports: [
    { id:"sport-1", title:"Championship Finals",       category:"Sports", url:"https://drive.google.com/file/d/YOUR_SPORT_ID_1/preview", duration:"05:30" },
    { id:"sport-2", title:"The Athlete's Journey",     category:"Sports", url:"https://drive.google.com/file/d/YOUR_SPORT_ID_2/preview", duration:"09:15" },
    { id:"sport-3", title:"Extreme Sports Compilation",category:"Sports", url:"https://drive.google.com/file/d/YOUR_SPORT_ID_3/preview", duration:"04:45" },
    { id:"sport-4", title:"Underdog Victory",          category:"Sports", url:"https://drive.google.com/file/d/YOUR_SPORT_ID_4/preview", duration:"11:20" }
  ],
  magnates: [
    { id:"mag-1", title:"The Billionaire Mindset", category:"Magnates Media", url:"https://drive.google.com/file/d/YOUR_MAG_ID_1/preview", duration:"07:45" },
    { id:"mag-2", title:"Empire Builders",         category:"Magnates Media", url:"https://drive.google.com/file/d/YOUR_MAG_ID_2/preview", duration:"10:30" },
    { id:"mag-3", title:"Luxury Unveiled",         category:"Magnates Media", url:"https://drive.google.com/file/d/YOUR_MAG_ID_3/preview", duration:"06:15" },
    { id:"mag-4", title:"Success Stories",         category:"Magnates Media", url:"https://drive.google.com/file/d/YOUR_MAG_ID_4/preview", duration:"14:00" }
  ],
  "motion-graphics": [
    { id:"mg-1", title:"Brand Identity Reveal",     category:"Motion Graphics", url:"https://drive.google.com/file/d/YOUR_MG_ID_1/preview", duration:"00:45" },
    { id:"mg-2", title:"Product Launch Animation",  category:"Motion Graphics", url:"https://drive.google.com/file/d/YOUR_MG_ID_2/preview", duration:"01:30" },
    { id:"mg-3", title:"Kinetic Typography",        category:"Motion Graphics", url:"https://drive.google.com/file/d/YOUR_MG_ID_3/preview", duration:"02:15" },
    { id:"mg-4", title:"Visual Effects Showcase",   category:"Motion Graphics", url:"https://drive.google.com/file/d/YOUR_MG_ID_4/preview", duration:"03:00" }
  ]
};

function getEmbedUrl(url){
  if(!url) return "";
  if(url.includes("/preview")) return url;
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if(m && m[1]) return `https://drive.google.com/file/d/${m[1]}/preview`;
  if(/^[a-zA-Z0-9_-]{20,}$/.test(url)) return `https://drive.google.com/file/d/${url}/preview`;
  return url;
}

function getAllVideos(){ return Object.values(VIDEOS).flat(); }
function getByCategory(cat){ if(cat==="all") return getAllVideos(); return VIDEOS[cat]||[]; }
function getFeatured(){ const f=[], cats=["documentary","sports","magnates","motion-graphics"]; cats.forEach(c=>{if(VIDEOS[c]&&VIDEOS[c][0])f.push(VIDEOS[c][0])}); return f; }

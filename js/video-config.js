/**
 * VIDEO CONFIGURATION
 * ===================
 * All videos use the same Google Drive embed URL.
 * To change, replace the URL below and in index.html / portfolio.html.
 */

const VIDEOS = {
  documentary: [
    { id:"doc-1", title:"The Untold Story",      category:"Documentary",       url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"doc-2", title:"Behind the Lens",       category:"Documentary",       url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"doc-3", title:"Voices Unheard",        category:"Documentary",       url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"doc-4", title:"Earth's Last Frontier", category:"Documentary",       url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" }
  ],
  sports: [
    { id:"sport-1", title:"Championship Finals",       category:"Sports", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"sport-2", title:"The Athlete's Journey",     category:"Sports", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"sport-3", title:"Extreme Sports Compilation",category:"Sports", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"sport-4", title:"Underdog Victory",          category:"Sports", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" }
  ],
  magnates: [
    { id:"mag-1", title:"The Billionaire Mindset", category:"Magnates Media", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"mag-2", title:"Empire Builders",         category:"Magnates Media", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"mag-3", title:"Luxury Unveiled",         category:"Magnates Media", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"mag-4", title:"Success Stories",         category:"Magnates Media", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" }
  ],
  "motion-graphics": [
    { id:"mg-1", title:"Brand Identity Reveal",     category:"Motion Graphics", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"mg-2", title:"Product Launch Animation",  category:"Motion Graphics", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"mg-3", title:"Kinetic Typography",        category:"Motion Graphics", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" },
    { id:"mg-4", title:"Visual Effects Showcase",   category:"Motion Graphics", url:"https://drive.google.com/file/d/1ooYlh1YG_C9RQTEoe18QTaalALxRN2QY/preview" }
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

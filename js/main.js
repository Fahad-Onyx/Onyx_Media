(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    initNav();
    initParticles();
    initReveal();
    initModal();
    initFilters();
    initSmoothScroll();
    initCounters();
    initMouseTilt();
  });

  function initNav(){
    const nav=document.querySelector('.nav');
    if(!nav) return;
    window.addEventListener('scroll', function(){
      nav.classList.toggle('scrolled', window.pageYOffset>80);
    },{passive:true});
  }

  function initParticles(){
    const c=document.querySelector('.hero-particles');
    if(!c) return;
    for(let i=0;i<30;i++){
      const p=document.createElement('div');
      p.className='particle';
      const s=Math.random()*4+2;
      p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*18}s;animation-duration:${Math.random()*12+12}s;opacity:${Math.random()*.3+.1}`;
      c.appendChild(p);
    }
  }

  function initReveal(){
    const els=document.querySelectorAll('.reveal');
    if(!els.length) return;
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('active'); } });
    },{threshold:.08,rootMargin:'0px 0px -60px 0px'});
    els.forEach(el=>obs.observe(el));
  }

  function initModal(){
    const modal=document.getElementById('videoModal');
    if(!modal) return;
    const wrap=modal.querySelector('.modal-video');
    const title=modal.querySelector('.modal-info h3');
    const cat=modal.querySelector('.modal-info p');
    const close=modal.querySelector('.modal-close');

    document.addEventListener('click', function(e){
      const card=e.target.closest('.video-card[data-video-url]');
      if(!card) return;
      const url=card.dataset.videoUrl;
      const t=card.dataset.videoTitle||'Video';
      const c=card.dataset.videoCategory||'';
      openModal(url,t,c);
    });

    close.addEventListener('click', closeModal);
    modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });

    function openModal(url,t,c){
      if(!url){ console.warn('No video URL'); return; }
      const embed=typeof getEmbedUrl==='function'?getEmbedUrl(url):url;
      let content='';
      if(embed.includes('drive.google.com')){
        content=`<iframe src="${embed}" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>`;
      } else if(embed.match(/\.(mp4|webm|ogg)$/i)){
        content=`<video controls autoplay style="width:100%;height:100%;"><source src="${embed}" type="video/mp4"></video>`;
      } else {
        content=`<iframe src="${embed}" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>`;
      }
      wrap.innerHTML=content;
      if(title) title.textContent=t;
      if(cat) cat.textContent=c;
      modal.classList.add('active');
      document.body.style.overflow='hidden';
    }

    function closeModal(){
      modal.classList.remove('active');
      document.body.style.overflow='';
      setTimeout(()=>{ wrap.innerHTML=''; },450);
    }
  }

  function initFilters(){
    const btns=document.querySelectorAll('.filter-btn[data-filter]');
    const cards=document.querySelectorAll('.video-card[data-category]');
    if(!btns.length||!cards.length) return;

    btns.forEach(btn=>{
      btn.addEventListener('click', function(){
        const filter=this.dataset.filter;
        btns.forEach(b=>b.classList.remove('active'));
        this.classList.add('active');

        cards.forEach(card=>{
          const cat=card.dataset.category;
          if(filter==='all'||cat===filter){
            card.style.display='';
            requestAnimationFrame(()=>{
              card.style.opacity='0'; card.style.transform='translateY(25px) scale(.96)';
              requestAnimationFrame(()=>{
                card.style.transition='all .55s cubic-bezier(.4,0,.2,1)';
                card.style.opacity='1'; card.style.transform='translateY(0) scale(1)';
              });
            });
          } else {
            card.style.transition='all .4s ease';
            card.style.opacity='0'; card.style.transform='translateY(25px) scale(.96)';
            setTimeout(()=>{ card.style.display='none'; },400);
          }
        });
      });
    });
  }

  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const id=this.getAttribute('href');
        if(id==='#') return;
        const t=document.querySelector(id);
        if(t){ e.preventDefault(); window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-75,behavior:'smooth'}); }
      });
    });
  }

  function initCounters(){
    const counters=document.querySelectorAll('[data-counter]');
    if(!counters.length) return;
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el=entry.target;
          const target=parseInt(el.dataset.counter);
          const suffix=el.dataset.counterSuffix||'';
          const dur=parseInt(el.dataset.counterDuration)||2200;
          animateCount(el,target,suffix,dur);
          obs.unobserve(el);
        }
      });
    },{threshold:.5});
    counters.forEach(el=>obs.observe(el));
  }

  function animateCount(el,target,suffix,dur){
    const start=performance.now();
    function update(now){
      const elapsed=now-start;
      const p=Math.min(elapsed/dur,1);
      const ease=1-Math.pow(1-p,3);
      el.textContent=Math.floor(ease*target)+suffix;
      if(p<1) requestAnimationFrame(update);
      else el.textContent=target+suffix;
    }
    requestAnimationFrame(update);
  }

  function initMouseTilt(){
    document.addEventListener('mousemove', function(e){
      document.querySelectorAll('.video-card:hover').forEach(card=>{
        const r=card.getBoundingClientRect();
        const x=e.clientX-r.left-r.width/2;
        const y=e.clientY-r.top-r.height/2;
        const rx=(y/r.height)*-6;
        const ry=(x/r.width)*6;
        card.style.transform=`translateY(-12px) scale(1.015) perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    });
    document.addEventListener('mouseout', function(e){
      const card=e.target.closest('.video-card');
      if(card) card.style.transform='';
    });
  }

})();

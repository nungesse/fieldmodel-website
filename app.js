'use strict';
(function(){
  const old=document.createElement('script');
  old.src='https://fieldmodel-private-briefing-kofyrgjdz-field-model.vercel.app/app.js';
  old.defer=true;
  document.head.appendChild(old);

  function rebuildExplainer(){
    const s=document.querySelector('#explainer');
    if(!s) return;
    const head=s.querySelector('.explainer-head');
    if(head){
      head.innerHTML='<p class="eyebrow">How FieldModel works</p><h2>One operating model. <span>Many fields. One shared view.</span></h2><p>FieldModel is a living, governed model of the revenue system. It connects the signals your business already produces, organizes them across multiple analysis layers and topologies, preserves how the field changes through time, and gives Scope enough context to reason over the broader situation—not just the record in front of you.</p>';
    }
    const native=document.createElement('div');
    native.className='explainer-native';
    native.innerHTML=`
      <div class="explainer-native-top">
        <section class="explainer-stack"><span class="native-label">Analysis layers</span><h4>Different kinds of evidence, one field.</h4><div class="layer-list"><span>Pipeline & opportunity <i></i></span><span>Stakeholders & influence <i></i></span><span>Engagement & activity <i></i></span><span>Product & technical fit <i></i></span><span>Contracts, readiness & partners <i></i></span></div></section>
        <section class="explainer-domains"><span class="native-label">Domain topology</span><h4>Explore the system from the angle that matters.</h4><div class="domain-cloud"><i class="dn a"></i><i class="dn b"></i><i class="dn c"></i><i class="dn d"></i><i class="dn e"></i><b>FIELD MODEL</b><small>Enterprise · Geography · Industry · Account · Stakeholder</small></div></section>
        <section class="explainer-time"><span class="native-label">Time</span><h4>See how the field got here—and where it is heading.</h4><div class="time-rail"><div class="time-line"></div><div class="time-copy"><span><b>Past</b>history & prior state</span><span><b>Now</b>operating reality</span><span><b>Next</b>trajectory & scenarios</span></div></div></section>
      </div>
      <div class="explainer-flow">
        <section class="explainer-stack"><span class="native-label">Model integrity</span><h4>Know what the model actually knows.</h4><div class="layer-list"><span>Evidence coverage <i></i></span><span>Freshness & confidence <i></i></span><span>Identity & relationship quality <i></i></span></div></section>
        <div class="flow-arrow">→</div>
        <section class="explainer-scope"><div class="scope-orb"></div><span class="native-label">Scope</span><h4>Orient on the inflection point.</h4><p>Scope reasons across the permitted Analysis Field to surface emerging value, hidden risk, dependencies, mitigations and leverage—then explains why they matter in the current role and view.</p><div class="scope-metrics"><span>Context-aware</span><span>Role-aware</span><span>Evidence-backed</span></div></section>
        <div class="flow-arrow">→</div>
        <section class="explainer-actions"><span class="native-label">Human action</span><h4>Make the consequential call together.</h4><p>People inspect the evidence, challenge the recommendation and decide what the business should do next.</p><div class="action-list"><span>Decision brief</span><span>Cross-functional Action Packet</span><span>Owner, timing & expected outcome</span></div></section>
      </div>`;
    const read=document.createElement('div');
    read.className='explainer-read';
    read.innerHTML=`<div class="explainer-read-head"><div><p class="eyebrow">Read the model left to right</p><h3>The picture is not the product. <span>The operating logic is.</span></h3></div><p>A FieldModel view is a way to orient people and AI on the same governed reality. The visible field can change by role, topology, scale and time, while Scope can reason across a broader Analysis Field that the user may not be looking at directly.</p></div><div class="explainer-read-grid"><article><b>1 · Connect</b><h4>Bring fragmented signals into context.</h4><p>CRM, conversation, product, support, contract, market and organizational evidence become connected model state rather than separate dashboards.</p></article><article><b>2 · Structure</b><h4>Represent relationships and dependencies.</h4><p>The model captures how opportunities, stakeholders, resources, commitments and outcomes influence one another—not only that the objects exist.</p></article><article><b>3 · Observe</b><h4>Choose the right topology and scale.</h4><p>A CRO, regional leader, seller or architect can inspect the same reality through different observation points without creating different underlying truths.</p></article><article><b>4 · Orient</b><h4>Scope reasons beyond the visible screen.</h4><p>The user’s role, current coordinates, selected topology, history, goals and evidence shape which insights and recommendations Scope brings forward.</p></article><article><b>5 · Decide</b><h4>Keep consequential judgment human.</h4><p>Scope compresses complexity and explains evidence. People supply trust, creativity, leadership, accountability and real-world judgment.</p></article><article><b>6 · Act & learn</b><h4>Coordinate the response and update the model.</h4><p>Approved work becomes coordinated action. Outcomes feed back into the operating state so future orientation improves.</p></article></div><p class="explainer-read-note"><strong>In one sentence:</strong> FieldModel turns fragmented revenue data into a living operating model, gives AI enough context to see farther, and gives people a clearer place to intervene together.</p>`;
    const oldFigure=s.querySelector('.explainer-figure');
    if(oldFigure) oldFigure.insertAdjacentElement('afterend',native); else s.appendChild(native);
    native.insertAdjacentElement('afterend',read);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',rebuildExplainer); else rebuildExplainer();
})();

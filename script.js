/* ============================================================
   ICONS
============================================================ */
const ICONS = {
  dashboard:'<path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-6H3v6z"/>',
  crm:'<circle cx="9" cy="7" r="3"/><path d="M2 21v-2a5 5 0 015-5h4a5 5 0 015 5v2"/><circle cx="18" cy="8" r="2.3"/><path d="M16 21v-1.6a4 4 0 00-1.2-2.9"/>',
  projects:'<path d="M3 7l3-4h5l1 2h9v13H3z"/>',
  scheduling:'<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="3" y1="10" x2="21" y2="10"/>',
  portal:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 10l2 2-2 2M13 14h3"/>',
  reports:'<path d="M4 21V9M12 21V3M20 21v-7"/>',
  freelancers:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  assets:'<path d="M3 7l2-3h14l2 3M3 7h18v13H3z"/><circle cx="9" cy="13" r="2"/><path d="M13 17l3-3 4 4"/>',
  invoices:'<path d="M6 2h9l3 3v17H6z"/><line x1="9" y1="8" x2="14" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/>',
};
function icon(name){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`; }

/* ============================================================
   SAMPLE DATA
============================================================ */
let DB = {
  clients:[
    {id:'c1', name:'كافيه لومير', industry:'مطاعم وكافيهات', retainer:true, monthlyValue:35000, contact:'محمد سامي', since:'2023'},
    {id:'c2', name:'بنك أفانتي', industry:'قطاع مصرفي', retainer:true, monthlyValue:120000, contact:'رنا عادل', since:'2022'},
    {id:'c3', name:'مجموعة نايل ريزيدنس', industry:'عقارات', retainer:false, monthlyValue:0, contact:'كريم فتحي', since:'2024'},
    {id:'c4', name:'فاست فيت', industry:'رياضة ولياقة', retainer:true, monthlyValue:22000, contact:'ياسمين عمر', since:'2023'},
    {id:'c5', name:'مطاعم البيت الشامي', industry:'مطاعم', retainer:false, monthlyValue:0, contact:'أحمد نبيل', since:'2024'},
    {id:'c6', name:'كليوباترا تكنولوجي', industry:'تكنولوجيا', retainer:true, monthlyValue:48000, contact:'مريم حسن', since:'2021'},
  ],
  leads:[
    {id:'l1', name:'شركة دلتا فارما', company:'قطاع دوائي', stage:'new', value:60000, source:'إحالة'},
    {id:'l2', name:'مجموعة سيلفر مول', company:'تجزئة', stage:'new', value:40000, source:'موقع الشركة'},
    {id:'l3', name:'مطاعم تيستي', company:'مطاعم', stage:'contacted', value:25000, source:'لينكدإن'},
    {id:'l4', name:'أكاديمية نور التعليمية', company:'تعليم', stage:'contacted', value:30000, source:'إحالة'},
    {id:'l5', name:'بيوتي لاب', company:'تجميل', stage:'proposal', value:45000, source:'إنستجرام'},
    {id:'l6', name:'كارز هب', company:'سيارات', stage:'proposal', value:70000, source:'موقع الشركة'},
    {id:'l7', name:'جرين فارم', company:'زراعة', stage:'negotiation', value:55000, source:'مؤتمر'},
    {id:'l8', name:'وايت ستون العقارية', company:'عقارات', stage:'won', value:90000, source:'إحالة'},
    {id:'l9', name:'سبيس جيم', company:'رياضة', stage:'lost', value:20000, source:'إنستجرام'},
  ],
  projects:[
    {id:'p1', name:'حملة رمضان 2026', clientId:'c1', type:'حملة موسمية', status:'active', budget:80000, cost:52000, progress:65, team:['هب','مأ','سك'],
      tasks:[{t:'تصوير محتوى الفيديو',done:true},{t:'تصميم البانرات',done:true},{t:'اعتماد العميل على السكريبت',done:false},{t:'جدولة النشر',done:false}]},
    {id:'p2', name:'إطلاق منتج بطاقة أفانتي بلاك', clientId:'c2', type:'إطلاق منتج', status:'active', budget:220000, cost:140000, progress:40, team:['هب','عم','ند'],
      tasks:[{t:'تصوير فيلم الإطلاق',done:true},{t:'تجهيز خطة الإعلانات',done:false},{t:'تصميم الهوية البصرية للحملة',done:true},{t:'اعتماد الميزانية النهائية',done:false}]},
    {id:'p3', name:'فيديو تسويقي - مشروع النخيل', clientId:'c3', type:'برودكشن', status:'review', budget:65000, cost:41000, progress:85, team:['سك','مأ'],
      tasks:[{t:'تصوير درون للموقع',done:true},{t:'مونتاج النسخة الأولى',done:true},{t:'مراجعة العميل',done:false}]},
    {id:'p4', name:'محتوى شهري - فاست فيت', clientId:'c4', type:'ريتينر شهري', status:'active', budget:22000, cost:14500, progress:50, team:['ند'],
      tasks:[{t:'تصوير 4 ريلز',done:true},{t:'تصميم بوستات الأسبوع',done:false}]},
    {id:'p5', name:'كامبين افتتاح فرع جديد', clientId:'c5', type:'حملة إطلاق', status:'planning', budget:38000, cost:5000, progress:10, team:['هب'],
      tasks:[{t:'زيارة الموقع',done:true},{t:'تحديد تاريخ التصوير',done:false}]},
    {id:'p6', name:'إعادة تصميم الهوية الرقمية', clientId:'c6', type:'براندينج', status:'active', budget:150000, cost:95000, progress:70, team:['عم','مأ','سك'],
      tasks:[{t:'تصميم اللوجو الجديد',done:true},{t:'دليل الهوية',done:true},{t:'تطبيق الهوية على السوشيال',done:false}]},
    {id:'p7', name:'فيديوهات تدريبية داخلية', clientId:'c2', type:'برودكشن', status:'done', budget:45000, cost:39000, progress:100, team:['سك']},
    {id:'p8', name:'حملة الجمعة البيضاء', clientId:'c1', type:'حملة موسمية', status:'done', budget:30000, cost:33000, progress:100, team:['ند']},
  ],
  schedule:[
    {day:0, time:'10:00', title:'تصوير حملة رمضان', client:'كافيه لومير', resource:'كاميرا A + استوديو 1', live:false},
    {day:1, time:'09:00', title:'تصوير فيلم الإطلاق', client:'بنك أفانتي', resource:'كاميرا B + فريق درون', live:false},
    {day:2, time:'12:00', title:'ريلز فاست فيت', client:'فاست فيت', resource:'كاميرا موبايل', live:true},
    {day:2, time:'15:00', title:'تصوير درون - النخيل', client:'نايل ريزيدنس', resource:'درون + كاميرا A', live:true},
    {day:3, time:'11:00', title:'جلسة تصوير هوية', client:'كليوباترا تكنولوجي', resource:'استوديو 2', live:false},
    {day:4, time:'10:30', title:'تصوير افتتاح الفرع', client:'البيت الشامي', resource:'كاميرا A + لايتنج', live:false},
    {day:5, time:'—', title:'يوم راحة الفريق', client:'—', resource:'—', live:false, off:true},
  ],
  freelancers:[
    {name:'أمير توفيق', role:'مصور فيديو', rate:'1200 ج/يوم', rating:4.8, tags:['تصوير','درون']},
    {name:'دينا الشريف', role:'مصممة جرافيك', rate:'350 ج/ساعة', rating:4.9, tags:['تصميم','براندينج']},
    {name:'مازن سعيد', role:'مونتير', rate:'900 ج/يوم', rating:4.6, tags:['مونتاج','موشن جرافيك']},
    {name:'ريم عادل', role:'كاتبة محتوى', rate:'250 ج/بوست', rating:4.7, tags:['محتوى','سوشيال']},
    {name:'طارق منصور', role:'مصور فوتوغرافي', rate:'1000 ج/يوم', rating:4.5, tags:['تصوير','منتجات']},
    {name:'سارة يوسف', role:'مديرة إعلانات ممولة', rate:'8000 ج/شهر', rating:4.9, tags:['فيسبوك','جوجل ادز']},
  ],
  assets:[
    {name:'رمضان_فيديو_نهائي_v3.mp4', project:'حملة رمضان 2026', version:'v3', type:'video'},
    {name:'بانر_رمضان_انستجرام.psd', project:'حملة رمضان 2026', version:'v2', type:'image'},
    {name:'فيلم_الاطلاق_مسودة.mp4', project:'إطلاق أفانتي بلاك', version:'v1', type:'video'},
    {name:'لوجو_كليوباترا_نهائي.ai', project:'إعادة تصميم الهوية', version:'v5', type:'image'},
    {name:'درون_النخيل_خام.mov', project:'فيديو النخيل', version:'v1', type:'video'},
    {name:'ريلز_فاست_فيت_02.mp4', project:'محتوى فاست فيت', version:'v2', type:'video'},
    {name:'دليل_الهوية_كليوباترا.pdf', project:'إعادة تصميم الهوية', version:'v2', type:'doc'},
    {name:'بوست_افتتاح_الفرع.png', project:'كامبين افتتاح فرع', version:'v1', type:'image'},
  ],
  invoices:[
    {id:'INV-1042', client:'كافيه لومير', type:'ريتينر', amount:35000, status:'paid', date:'2026-07-01'},
    {id:'INV-1043', client:'بنك أفانتي', type:'ريتينر', amount:120000, status:'paid', date:'2026-07-01'},
    {id:'INV-1044', client:'نايل ريزيدنس', type:'مشروع', amount:32500, status:'due', date:'2026-07-15'},
    {id:'INV-1045', client:'فاست فيت', type:'ريتينر', amount:22000, status:'overdue', date:'2026-06-25'},
    {id:'INV-1046', client:'كليوباترا تكنولوجي', type:'مشروع', amount:75000, status:'due', date:'2026-07-28'},
    {id:'INV-1047', client:'البيت الشامي', type:'مشروع', amount:19000, status:'paid', date:'2026-07-10'},
  ]
};

let state = { view:'dashboard', crmTab:'pipeline', portalClient:'c1', damFilter:'all', invoiceFilter:'all' };

/* ============================================================
   NAV
============================================================ */
const NAV = [
  {group:'الرئيسية', items:[ {id:'dashboard', label:'لوحة التحكم', icon:'dashboard'} ]},
  {group:'المبيعات والعملاء', items:[
    {id:'crm', label:'العملاء المحتملون (CRM)', icon:'crm', badge: ()=>DB.leads.filter(l=>!['won','lost'].includes(l.stage)).length},
    {id:'projects', label:'المشاريع والحملات', icon:'projects', badge: ()=>DB.projects.filter(p=>p.status==='active').length},
  ]},
  {group:'العمليات', items:[
    {id:'scheduling', label:'جدولة التصوير والمعدات', icon:'scheduling'},
    {id:'assets', label:'مكتبة الملفات (DAM)', icon:'assets'},
    {id:'freelancers', label:'الفريلانسرز والموردين', icon:'freelancers'},
  ]},
  {group:'العميل والمال', items:[
    {id:'portal', label:'بورتال العميل', icon:'portal'},
    {id:'reports', label:'تقارير الربحية', icon:'reports'},
    {id:'invoices', label:'الفواتير', icon:'invoices'},
  ]},
];
const TITLES = {
  dashboard:['لوحة التحكم','نظرة عامة على أداء الشركة اليوم'],
  crm:['العملاء المحتملون','تابع كل عميل من أول تواصل لحد التعاقد'],
  projects:['المشاريع والحملات','كل مشروع مربوط بالعميل بتاعه تلقائيًا من CRM'],
  scheduling:['جدولة التصوير والمعدات','مين متاح، وأي معدة محجوزة، وإمتى'],
  assets:['مكتبة الملفات','كل نسخ الفيديوهات والتصميمات في مكان واحد'],
  freelancers:['الفريلانسرز والموردين','الأسعار والتقييمات والتخصصات'],
  portal:['بورتال العميل','شكل الموقع اللي هيشوفه العميل بنفسه'],
  reports:['تقارير الربحية','كل مشروع وكل عميل بيجيب صافي كام فعليًا'],
  invoices:['الفواتير','فرق بين عقود الريتينر والمشاريع المنفردة'],
};

function renderNav(){
  const el = document.getElementById('navList');
  el.innerHTML = NAV.map(g=>`
    <div class="nav-group-label">${g.group}</div>
    ${g.items.map(it=>`
      <button class="nav-item ${state.view===it.id?'active':''}" onclick="switchView('${it.id}')">
        ${icon(it.icon)}<span>${it.label}</span>
        ${it.badge? `<span class="badge">${it.badge()}</span>`:''}
      </button>
    `).join('')}
  `).join('');
}

function switchView(v){
  state.view = v;
  document.getElementById('pageTitle').textContent = TITLES[v][0];
  document.getElementById('pageSub').textContent = TITLES[v][1];
  renderNav();
  renderView();
  toggleSidebar(false);
  window.scrollTo({top:0, behavior:'smooth'});
}

function toggleSidebar(open){
  document.getElementById('sidebar').classList.toggle('open', open);
  document.getElementById('backdrop').classList.toggle('active', open);
}

/* ============================================================
   HELPERS
============================================================ */
function money(n){ return n.toLocaleString('en-US') + ' ج.م'; }
function clientById(id){ return DB.clients.find(c=>c.id===id); }
function statusBadge(status){
  const map = {
    active:['قيد التنفيذ','badge-blue'], review:['في المراجعة','badge-amber'],
    planning:['تخطيط','badge-gray'], done:['مكتمل','badge-green'],
    new:['جديد','badge-gray'], contacted:['تم التواصل','badge-blue'],
    proposal:['عرض سعر','badge-amber'], negotiation:['تفاوض','badge-amber'],
    won:['تم الفوز','badge-green'], lost:['فقدنا العميل','badge-red'],
    paid:['مدفوعة','badge-green'], due:['مستحقة','badge-amber'], overdue:['متأخرة','badge-red'],
  };
  const [label,cls] = map[status] || [status,'badge-gray'];
  return `<span class="badge ${cls}">${label}</span>`;
}
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}
function openModal(html){
  document.getElementById('modalBox').innerHTML = html;
  document.getElementById('overlay').classList.add('active');
}
function closeModal(){ document.getElementById('overlay').classList.remove('active'); }

/* ============================================================
   DASHBOARD
============================================================ */
function renderDashboard(){
  const activeProjects = DB.projects.filter(p=>p.status==='active').length;
  const monthlyRetainer = DB.clients.filter(c=>c.retainer).reduce((s,c)=>s+c.monthlyValue,0);
  const pipelineValue = DB.leads.filter(l=>!['won','lost'].includes(l.stage)).reduce((s,l)=>s+l.value,0);
  const avgMargin = Math.round(DB.projects.reduce((s,p)=>s+((p.budget-p.cost)/p.budget*100),0)/DB.projects.length);
  const liveToday = DB.schedule.filter(s=>s.live).length;

  return `
  <div class="grid grid-4" style="margin-bottom:20px;">
    <div class="card kpi"><div class="kpi-icon">${icon('projects')}</div><div class="label">مشاريع شغالة دلوقتي</div><div class="value">${activeProjects}</div><div class="delta up">▲ 2 مشاريع جديدة الأسبوع ده</div></div>
    <div class="card kpi"><div class="kpi-icon">${icon('invoices')}</div><div class="label">إيرادات الريتينر الشهرية</div><div class="value">${money(monthlyRetainer)}</div><div class="delta up">▲ 4 عملاء ريتينر ثابتين</div></div>
    <div class="card kpi"><div class="kpi-icon">${icon('crm')}</div><div class="label">قيمة فرص البيع الحالية</div><div class="value">${money(pipelineValue)}</div><div class="delta up">▲ ${DB.leads.filter(l=>!['won','lost'].includes(l.stage)).length} عميل محتمل في المسار</div></div>
    <div class="card kpi"><div class="kpi-icon">${icon('reports')}</div><div class="label">متوسط هامش الربح</div><div class="value">${avgMargin}%</div><div class="delta ${avgMargin>25?'up':'down'}">${avgMargin>25?'▲ صحي':'▼ محتاج مراجعة'}</div></div>
  </div>

  <div class="grid grid-3" style="align-items:start;">
    <div class="card" style="grid-column:span 2;">
      <div class="section-head"><h3>الإيرادات الشهرية حسب العميل</h3></div>
      <canvas id="revChart" height="230"></canvas>
    </div>
    <div class="card">
      <h3>تصوير جاري دلوقتي</h3>
      <div style="margin-top:14px;">
        ${DB.schedule.filter(s=>s.live).map(s=>`
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-150);">
            <span class="rec-dot" style="flex-shrink:0;"></span>
            <div>
              <div style="font-size:13px;font-weight:700;">${s.title}</div>
              <div style="font-size:11.5px;color:var(--gray-500);">${s.client} · ${s.resource}</div>
            </div>
          </div>
        `).join('') || '<div class="empty">مفيش تصوير شغال دلوقتي</div>'}
      </div>
      <h3 style="margin-top:18px;">مهام قريب استحقاقها</h3>
      <div style="margin-top:10px;">
        ${DB.projects.filter(p=>p.tasks).flatMap(p=>p.tasks.filter(t=>!t.done).map(t=>({...t, proj:p.name}))).slice(0,4).map(t=>`
          <div style="display:flex;align-items:center;gap:8px;padding:7px 0;font-size:12.5px;">
            <span style="width:6px;height:6px;border-radius:50%;background:var(--blue);flex-shrink:0;"></span>
            <span>${t.t} <span class="muted">— ${t.proj}</span></span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
  `;
}

function drawRevChart(){
  const ctx = document.getElementById('revChart');
  if(!ctx) return;
  const clients = DB.clients;
  new Chart(ctx, {
    type:'bar',
    data:{
      labels: clients.map(c=>c.name),
      datasets:[{
        data: clients.map(c=> c.retainer? c.monthlyValue : DB.projects.filter(p=>p.clientId===c.id).reduce((s,p)=>s+p.budget,0)/6 ),
        backgroundColor:'#1B4DFF',
        borderRadius:6,
        maxBarThickness:36,
      }]
    },
    options:{
      plugins:{legend:{display:false}},
      scales:{ y:{ grid:{color:'#EEF0F5'}, ticks:{callback:v=>(v/1000)+'k'} }, x:{grid:{display:false}} }
    }
  });
}

/* ============================================================
   CRM
============================================================ */
const STAGES = [
  {id:'new', label:'جديد'}, {id:'contacted', label:'تم التواصل'},
  {id:'proposal', label:'عرض سعر'}, {id:'negotiation', label:'تفاوض'},
  {id:'won', label:'تم الفوز'}, {id:'lost', label:'فقدنا العميل'},
];
function renderCRM(){
  return `
  <div class="section-head">
    <div class="pill-tabs">
      <button class="pill-tab ${state.crmTab==='pipeline'?'active':''}" onclick="state.crmTab='pipeline';renderView()">مسار البيع</button>
      <button class="pill-tab ${state.crmTab==='clients'?'active':''}" onclick="state.crmTab='clients';renderView()">العملاء الحاليين</button>
    </div>
    <button class="btn btn-outline btn-sm" onclick="showToast('اسحب أي كارت بين الأعمدة لتحديث حالته')">💡 اسحب الكروت لتغيير الحالة</button>
  </div>
  ${state.crmTab==='pipeline'? renderPipeline() : renderClientsTable()}
  `;
}
function renderPipeline(){
  return `<div class="kanban">
    ${STAGES.map(s=>`
      <div class="kanban-col" data-stage="${s.id}" ondragover="event.preventDefault(); this.classList.add('over')" ondragleave="this.classList.remove('over')" ondrop="dropLead(event,'${s.id}')">
        <h4>${s.label} <span class="kanban-count">${DB.leads.filter(l=>l.stage===s.id).length}</span></h4>
        ${DB.leads.filter(l=>l.stage===s.id).map(l=>`
          <div class="kanban-card" draggable="true" ondragstart="dragLead(event,'${l.id}')">
            <div class="name">${l.name}</div>
            <div class="company">${l.company} · ${l.source}</div>
            <div class="value">${money(l.value)}</div>
            ${s.id==='won'? `<button class="btn btn-primary btn-sm" style="width:100%;margin-top:8px;" onclick="convertToProject('${l.id}')">تحويل لمشروع</button>` : ''}
          </div>
        `).join('')}
      </div>
    `).join('')}
  </div>`;
}
let draggedLeadId = null;
function dragLead(e,id){ draggedLeadId = id; e.target.classList.add('dragging'); }
function dropLead(e, stage){
  e.currentTarget.classList.remove('over');
  const lead = DB.leads.find(l=>l.id===draggedLeadId);
  if(lead){ lead.stage = stage; showToast(`تم نقل "${lead.name}" إلى: ${STAGES.find(s=>s.id===stage).label}`); renderView(); }
}
function convertToProject(leadId){
  const lead = DB.leads.find(l=>l.id===leadId);
  const newClientId = 'c'+(DB.clients.length+1);
  DB.clients.push({id:newClientId, name:lead.name, industry:lead.company, retainer:false, monthlyValue:0, contact:'—', since:'2026'});
  DB.projects.unshift({id:'p'+(DB.projects.length+1), name:'مشروع جديد - '+lead.name, clientId:newClientId, type:'مشروع جديد', status:'planning', budget:lead.value, cost:0, progress:5, team:['هب'], tasks:[{t:'اجتماع بدء المشروع (Kick-off)',done:false}]});
  showToast('تم إنشاء عميل ومشروع جديد تلقائيًا من CRM ✓');
  switchView('projects');
}
function renderClientsTable(){
  return `<div class="card" style="overflow-x:auto;">
  <table>
    <thead><tr><th>العميل</th><th>القطاع</th><th>نوع التعاقد</th><th>القيمة الشهرية</th><th>مسؤول التواصل</th><th>عميل منذ</th><th>مشاريع مرتبطة</th></tr></thead>
    <tbody>
    ${DB.clients.map(c=>`
      <tr>
        <td style="font-weight:700;">${c.name}</td>
        <td>${c.industry}</td>
        <td>${c.retainer? '<span class="badge badge-blue">ريتينر شهري</span>':'<span class="badge badge-gray">بالمشروع</span>'}</td>
        <td>${c.retainer? money(c.monthlyValue) : '—'}</td>
        <td>${c.contact}</td>
        <td>${c.since}</td>
        <td>${DB.projects.filter(p=>p.clientId===c.id).length}</td>
      </tr>
    `).join('')}
    </tbody>
  </table>
  </div>`;
}

/* ============================================================
   PROJECTS
============================================================ */
function renderProjects(){
  return `<div class="grid grid-3">
    ${DB.projects.map(p=>{
      const c = clientById(p.clientId);
      return `
      <div class="card proj-card" onclick="openProjectModal('${p.id}')">
        <div class="proj-top">
          <div>
            <h3>${p.name}</h3>
            <div class="proj-client">${c? c.name : '—'} · ${p.type}</div>
          </div>
          ${statusBadge(p.status)}
        </div>
        <div style="margin-top:16px;">
          <div style="display:flex;justify-content:space-between;font-size:11.5px;color:var(--gray-500);margin-bottom:6px;">
            <span>نسبة الإنجاز</span><span>${p.progress}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${p.progress}%;"></div></div>
        </div>
        <div class="proj-meta">
          <span>💰 ${money(p.budget)}</span>
          <span>📊 هامش ${Math.round((p.budget-p.cost)/p.budget*100)}%</span>
        </div>
        <div class="proj-team">
          ${p.team.map(t=>`<span class="avatar-sm">${t}</span>`).join('')}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}
function openProjectModal(id){
  const p = DB.projects.find(x=>x.id===id);
  const c = clientById(p.clientId);
  openModal(`
    <div class="modal-head">
      <div><h3>${p.name}</h3><div class="proj-client" style="margin-top:4px;">${c?c.name:'—'} · ${p.type}</div></div>
      <button class="close-x" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="grid grid-3" style="margin-bottom:18px;">
        <div><div class="muted" style="font-size:11.5px;">الميزانية</div><div style="font-weight:800;font-family:'Cairo';">${money(p.budget)}</div></div>
        <div><div class="muted" style="font-size:11.5px;">التكلفة الفعلية</div><div style="font-weight:800;font-family:'Cairo';">${money(p.cost)}</div></div>
        <div><div class="muted" style="font-size:11.5px;">الحالة</div>${statusBadge(p.status)}</div>
      </div>
      <h4 style="font-size:13.5px;margin-bottom:8px;">قائمة المهام</h4>
      ${(p.tasks||[]).map((t,i)=>`
        <div class="task-row ${t.done?'done':''}">
          <input type="checkbox" ${t.done?'checked':''} onchange="toggleTask('${p.id}',${i})">
          <label>${t.t}</label>
        </div>
      `).join('') || '<div class="empty">لا توجد مهام مسجلة</div>'}
      <h4 style="font-size:13.5px;margin:16px 0 8px;">الفريق المسؤول</h4>
      <div class="proj-team" style="margin-top:0;">${p.team.map(t=>`<span class="avatar-sm">${t}</span>`).join('')}</div>
    </div>
  `);
}
function toggleTask(pid, idx){
  const p = DB.projects.find(x=>x.id===pid);
  p.tasks[idx].done = !p.tasks[idx].done;
  openProjectModal(pid);
}

/* ============================================================
   SCHEDULING
============================================================ */
const DAYS = ['السبت','الأحد','الاتنين','الثلاثاء','الأربعاء','الخميس','الجمعة'];
function renderScheduling(){
  return `
  <div class="section-head"><h2>جدول الأسبوع</h2>
    <button class="btn btn-primary btn-sm" onclick="quickUpdateModal()">📱 تحديث حالة تصوير من الموبايل</button>
  </div>
  <div class="week-grid">
    <div class="week-head"></div>
    ${DAYS.map(d=>`<div class="week-head">${d}</div>`).join('')}
    <div class="time-label">التصوير</div>
    ${DAYS.map((d,i)=>`
      <div>
        ${DB.schedule.filter(s=>s.day===i).map(s=> s.off ? `<div class="shoot-block" style="background:var(--gray-100);border-color:var(--gray-300);color:var(--gray-500);">${s.title}</div>` : `
          <div class="shoot-block ${s.live?'live':''}">${s.title}<small>${s.client}</small><small>${s.resource}</small></div>
        `).join('') || ''}
      </div>
    `).join('')}
  </div>
  <div class="card" style="margin-top:20px;">
    <h3>ليه دي حاجة مهمة؟</h3>
    <p class="muted" style="font-size:13px;margin-top:8px;line-height:1.9;">
      الفريق في الموقع يقدر يفتح النظام من الموبايل ويحدّث حالة أي تصوير (بدأ / خلص / اتأجل) أو يرفع الملفات الخام مباشرة أونلاين، بدل ما ينتظر يرجع المكتب.
    </p>
  </div>`;
}
function quickUpdateModal(){
  openModal(`
    <div class="modal-head"><h3>تحديث سريع — من الموقع</h3><button class="close-x" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <label style="font-size:12.5px;font-weight:700;">اختر التصوير</label>
      <select id="qu-shoot" style="width:100%;padding:11px;border-radius:10px;border:1px solid var(--gray-300);margin:8px 0 16px;">
        ${DB.schedule.filter(s=>!s.off).map(s=>`<option>${s.title} — ${s.client}</option>`)}
      </select>
      <label style="font-size:12.5px;font-weight:700;">الحالة الجديدة</label>
      <div style="display:flex;gap:8px;margin:10px 0 18px;">
        <button class="btn btn-outline btn-sm" onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('btn-primary')); this.classList.add('btn-primary')">بدأ التصوير</button>
        <button class="btn btn-outline btn-sm" onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('btn-primary')); this.classList.add('btn-primary')">خلص</button>
        <button class="btn btn-outline btn-sm" onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('btn-primary')); this.classList.add('btn-primary')">تأجيل</button>
      </div>
      <button class="btn btn-primary" style="width:100%;" onclick="closeModal(); showToast('تم تحديث حالة التصوير بنجاح ✓')">حفظ التحديث</button>
    </div>
  `);
}

/* ============================================================
   ASSETS (DAM)
============================================================ */
function assetIcon(type){
  const svgs = {video:'<path d="M4 6h11v12H4zM15 9l5-3v12l-5-3"/>', image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M4 18l6-6 4 4 3-3 3 3"/>', doc:'<path d="M6 2h9l3 3v17H6z"/><line x1="9" y1="8" x2="14" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/>'};
  return `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6">${svgs[type]}</svg>`;
}
function assetColor(type){ return {video:'linear-gradient(135deg,#1B4DFF,#0A0B10)', image:'linear-gradient(135deg,#3D6BFF,#1B4DFF)', doc:'linear-gradient(135deg,#4A4C59,#0A0B10)'}[type]; }
function renderAssets(){
  const projects = [...new Set(DB.assets.map(a=>a.project))];
  return `
  <div class="section-head">
    <h2>مكتبة الملفات</h2>
    <select onchange="state.damFilter=this.value; renderView()" style="padding:9px 14px;border-radius:10px;border:1px solid var(--gray-300);font-size:13px;">
      <option value="all">كل المشاريع</option>
      ${projects.map(p=>`<option value="${p}" ${state.damFilter===p?'selected':''}>${p}</option>`)}
    </select>
  </div>
  <div class="dam-grid">
    ${DB.assets.filter(a=>state.damFilter==='all'||a.project===state.damFilter).map(a=>`
      <div class="dam-tile">
        <div class="dam-thumb" style="background:${assetColor(a.type)};">
          ${assetIcon(a.type)}
          <span class="dam-version">${a.version}</span>
        </div>
        <div class="dam-body">
          <div class="fn">${a.name}</div>
          <div class="meta">${a.project}</div>
        </div>
      </div>
    `).join('')}
  </div>`;
}

/* ============================================================
   FREELANCERS
============================================================ */
function renderFreelancers(){
  return `<div class="grid grid-4">
    ${DB.freelancers.map(f=>`
      <div class="card fl-card">
        <div class="fl-avatar">${f.name.split(' ')[0][0]}</div>
        <div class="fl-name">${f.name}</div>
        <div class="fl-role">${f.role}</div>
        <div class="stars">${'★'.repeat(Math.round(f.rating))}${'☆'.repeat(5-Math.round(f.rating))} <span class="muted">(${f.rating})</span></div>
        <div class="fl-tags">${f.tags.map(t=>`<span class="fl-tag">${t}</span>`).join('')}</div>
        <div class="fl-rate">${f.rate}</div>
      </div>
    `).join('')}
  </div>`;
}

/* ============================================================
   CLIENT PORTAL PREVIEW
============================================================ */
function renderPortal(){
  const c = clientById(state.portalClient);
  const proj = DB.projects.find(p=>p.clientId===c.id) || DB.projects[0];
  const assets = DB.assets.filter(a=>a.project===proj.name).length? DB.assets.filter(a=>a.project===proj.name) : DB.assets.slice(0,3);
  return `
  <div class="section-head">
    <div>
      <h2 style="display:flex;align-items:center;gap:10px;">معاينة بعيون العميل
        <span class="badge badge-blue">Live Preview</span>
      </h2>
    </div>
    <select onchange="state.portalClient=this.value; renderView()" style="padding:9px 14px;border-radius:10px;border:1px solid var(--gray-300);font-size:13px;">
      ${DB.clients.map(cl=>`<option value="${cl.id}" ${state.portalClient===cl.id?'selected':''}>${cl.name}</option>`)}
    </select>
  </div>

  <div class="portal-shell">
    <span class="portal-badge"><span class="dot"></span> بورتال ${c.name}</span>
    <h3 style="color:#fff;font-size:22px;">${proj.name}</h3>
    <p style="color:#B7B9CB;font-size:13px;margin-top:6px;">راجع أحدث التسليمات واعتمدها أو اطلب تعديل من هنا، بدون إيميلات أو رسايل متفرقة.</p>
    <div class="asset-gallery">
      ${assets.map((a,i)=>`
        <div class="asset-tile">
          <div class="asset-thumb" style="background:${assetColor(a.type)};">${assetIcon(a.type)}</div>
          <div class="asset-info"><div class="fn">${a.name}</div><div class="ver">النسخة ${a.version}</div></div>
          <div class="asset-actions">
            <button class="approve-btn" id="ap-${i}" onclick="portalDecision(${i},'approve')">اعتماد</button>
            <button class="revise-btn" id="rv-${i}" onclick="portalDecision(${i},'revise')">طلب تعديل</button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  <div class="card" style="margin-top:16px;">
    <h3>ملاحظات العميل على آخر تسليم</h3>
    <textarea placeholder="اكتب ملاحظتك هنا... (معاينة تجريبية)" style="width:100%;min-height:70px;margin-top:10px;padding:12px;border-radius:10px;border:1px solid var(--gray-300);resize:vertical;"></textarea>
    <button class="btn btn-primary btn-sm" style="margin-top:10px;" onclick="showToast('تم إرسال الملاحظة للفريق')">إرسال الملاحظة</button>
  </div>`;
}
function portalDecision(i, type){
  document.getElementById('ap-'+i).classList.toggle('selected', type==='approve');
  document.getElementById('rv-'+i).classList.toggle('selected', type==='revise');
  showToast(type==='approve' ? 'تم اعتماد التسليم ✓' : 'تم إرسال طلب التعديل للفريق');
}

/* ============================================================
   REPORTS (PROFITABILITY)
============================================================ */
function renderReports(){
  const rows = DB.projects.map(p=>({...p, margin: p.budget-p.cost, marginPct: Math.round((p.budget-p.cost)/p.budget*100)}));
  return `
  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card"><h3>هامش الربح لكل مشروع</h3><canvas id="marginChart" height="220"></canvas></div>
    <div class="card"><h3>حصة كل عميل من الإيرادات</h3><canvas id="shareChart" height="220"></canvas></div>
  </div>
  <div class="card" style="overflow-x:auto;">
    <h3 style="margin-bottom:12px;">تفصيل ربحية المشاريع</h3>
    <table>
      <thead><tr><th>المشروع</th><th>العميل</th><th>الميزانية</th><th>التكلفة</th><th>صافي الربح</th><th>هامش الربح</th></tr></thead>
      <tbody>
      ${rows.map(p=>{
        const c = clientById(p.clientId);
        const cls = p.marginPct>=30?'badge-green':p.marginPct>=10?'badge-amber':'badge-red';
        return `<tr>
          <td style="font-weight:700;">${p.name}</td>
          <td>${c?c.name:'—'}</td>
          <td>${money(p.budget)}</td>
          <td>${money(p.cost)}</td>
          <td>${money(p.margin)}</td>
          <td><span class="badge ${cls}">${p.marginPct}%</span></td>
        </tr>`;
      }).join('')}
      </tbody>
    </table>
  </div>`;
}
function drawReportCharts(){
  const rows = DB.projects.map(p=>({...p, marginPct: Math.round((p.budget-p.cost)/p.budget*100)}));
  const mc = document.getElementById('marginChart');
  if(mc){
    new Chart(mc,{type:'bar', data:{ labels: rows.map(p=>p.name.slice(0,14)+'…'),
      datasets:[{data: rows.map(p=>p.marginPct), backgroundColor: rows.map(p=>p.marginPct>=30?'#1B9E63':p.marginPct>=10?'#C98A1B':'#D6373F'), borderRadius:6, maxBarThickness:28}]},
      options:{plugins:{legend:{display:false}}, scales:{y:{grid:{color:'#EEF0F5'}, ticks:{callback:v=>v+'%'}}, x:{grid:{display:false}, ticks:{font:{size:10}}}}}
    });
  }
  const sc = document.getElementById('shareChart');
  if(sc){
    const clients = DB.clients;
    const totals = clients.map(c=> DB.projects.filter(p=>p.clientId===c.id).reduce((s,p)=>s+p.budget,0) );
    new Chart(sc,{type:'doughnut', data:{ labels: clients.map(c=>c.name), datasets:[{data: totals, backgroundColor:['#1B4DFF','#0A0B10','#3D6BFF','#7A7D8C','#102FA6','#B7C3FF']}]},
      options:{ plugins:{legend:{position:'bottom', labels:{boxWidth:10, font:{size:11}}}}, cutout:'62%' }
    });
  }
}

/* ============================================================
   INVOICES
============================================================ */
function renderInvoices(){
  const filtered = DB.invoices.filter(i=> state.invoiceFilter==='all' || i.status===state.invoiceFilter);
  const total = DB.invoices.reduce((s,i)=>s+i.amount,0);
  const paid = DB.invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+i.amount,0);
  const due = total-paid;
  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi"><div class="label">إجمالي الفواتير</div><div class="value">${money(total)}</div></div>
    <div class="card kpi"><div class="label">تم تحصيله</div><div class="value" style="color:var(--green);">${money(paid)}</div></div>
    <div class="card kpi"><div class="label">متبقي / متأخر</div><div class="value" style="color:var(--red);">${money(due)}</div></div>
  </div>
  <div class="section-head">
    <div class="pill-tabs">
      ${['all','paid','due','overdue'].map(f=>`<button class="pill-tab ${state.invoiceFilter===f?'active':''}" onclick="state.invoiceFilter='${f}';renderView()">${{all:'الكل',paid:'مدفوعة',due:'مستحقة',overdue:'متأخرة'}[f]}</button>`).join('')}
    </div>
  </div>
  <div class="card" style="overflow-x:auto;">
    <table>
      <thead><tr><th>رقم الفاتورة</th><th>العميل</th><th>النوع</th><th>القيمة</th><th>تاريخ الاستحقاق</th><th>الحالة</th></tr></thead>
      <tbody>
      ${filtered.map(i=>`
        <tr>
          <td style="font-weight:700;">${i.id}</td>
          <td>${i.client}</td>
          <td><span class="badge ${i.type==='ريتينر'?'badge-blue':'badge-gray'}">${i.type}</span></td>
          <td>${money(i.amount)}</td>
          <td>${i.date}</td>
          <td>${statusBadge(i.status)}</td>
        </tr>
      `).join('')}
      </tbody>
    </table>
  </div>`;
}

/* ============================================================
   ROUTER
============================================================ */
function renderView(){
  const c = document.getElementById('content');
  const renderers = { dashboard:renderDashboard, crm:renderCRM, projects:renderProjects, scheduling:renderScheduling,
    assets:renderAssets, freelancers:renderFreelancers, portal:renderPortal, reports:renderReports, invoices:renderInvoices };
  c.innerHTML = renderers[state.view]();
  if(state.view==='dashboard') setTimeout(drawRevChart, 30);
  if(state.view==='reports') setTimeout(drawReportCharts, 30);
  const liveCount = DB.schedule.filter(s=>s.live).length;
  document.getElementById('recText').textContent = liveCount ? `${liveCount} تصوير جاري دلوقتي` : 'مفيش تصوير جاري دلوقتي';
  document.getElementById('recPill').style.display = liveCount ? 'flex' : 'none';
}

renderNav();
renderView();
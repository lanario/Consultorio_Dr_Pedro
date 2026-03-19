const steps = [
  {
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15V6"/><path d="M18.5 6H21"/><path d="M3 9v9"/><path d="M3 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
        <path d="M7 11h8"/><path d="M7 15h6"/>
      </svg>
    ),
    title: "Connect your data",
    description: "Link your tools (CRM, email, database, spreadsheets). Loopra unifies events and keeps everything in sync.",
    tags: ["CRM", "Email", "Database", "Sheets"],
    visual: (
      <div className="w-full max-w-lg rounded-2xl p-6 relative" style={{background:"#0f1116",border:"1px solid rgba(255,255,255,0.05)"}}>
        <div className="flex items-center justify-between mb-5">
          <div className="h-3 w-28 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
          <div className="flex items-center gap-2">
            {[0,1,2].map(i=><div key={i} className="w-2 h-2 rounded-full" style={{background:"rgba(255,255,255,0.2)"}}></div>)}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[28,20,14].map((w,i)=>(
            <div key={i} className="rounded-xl p-4" style={{border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)"}}>
              <div className="h-2.5 rounded-full mb-3" style={{width:`${w*4}px`,background:"rgba(255,255,255,0.1)"}}></div>
              <div className="h-2 w-full rounded-full" style={{background:"rgba(255,255,255,0.05)"}}></div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4" style={{border:"1px solid rgba(255,255,255,0.1)",background:"rgba(0,0,0,0.25)"}}>
          <div className="flex items-center justify-between mb-3">
            <div className="h-2.5 w-28 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
            <div className="h-2.5 w-16 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-10 rounded-xl" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}></div>
            <div className="h-10 w-36 rounded-xl relative overflow-hidden" style={{background:"linear-gradient(to right,#3b82f6,#22d3ee)",boxShadow:"0 0 40px rgba(59,130,246,0.25)"}}>
              <div className="absolute inset-0" style={{background:"rgba(255,255,255,0.1)"}}></div>
            </div>
          </div>
          <div className="mt-4 h-px w-full" style={{background:"linear-gradient(to right,transparent,rgba(255,255,255,0.15),transparent)"}}></div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{background:"rgba(96,165,250,0.8)"}}></div>
            <div className="h-2.5 w-44 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
            <div className="ml-auto h-2.5 w-16 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6"/><path d="M12 16v6"/><path d="M4 12h6"/><path d="M14 12h6"/>
        <path d="M7 5l3 3"/><path d="M14 16l3 3"/><path d="M17 5l-3 3"/><path d="M10 16l-3 3"/>
      </svg>
    ),
    title: "Build with AI instructions",
    description: "Describe your automation. Loopra generates steps, conditions, and routing so your workflow is ready to run.",
    example: '"When a lead replies, score it, assign an owner, and send a follow-up email."',
    visual: (
      <div className="w-full max-w-lg rounded-2xl p-6 relative" style={{background:"#0f1116",border:"1px solid rgba(255,255,255,0.05)"}}>
        <div className="flex items-center justify-between mb-5">
          <div className="h-3 w-36 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
          <div className="h-3 w-20 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          {[false,false,true].map((active,i)=>(
            <div key={i} className="rounded-xl p-4" style={{border:`1px solid ${active?"rgba(59,130,246,0.3)":"rgba(255,255,255,0.1)"}`,background:active?"linear-gradient(to right,rgba(59,130,246,0.2),rgba(34,211,238,0.1))":"rgba(255,255,255,0.05)"}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl" style={{background:active?"linear-gradient(to right,#3b82f6,#22d3ee)":"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}></div>
                <div className="flex-1">
                  <div className="h-2.5 rounded-full mb-2" style={{width:active?"192px":"160px",background:active?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.1)"}}></div>
                  <div className="h-2 w-2/3 rounded-full" style={{background:"rgba(255,255,255,0.05)"}}></div>
                </div>
                <div className="h-8 rounded-xl" style={{width:active?"112px":"80px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-10 rounded-xl" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}></div>
          <div className="h-10 w-40 rounded-xl relative overflow-hidden" style={{background:"linear-gradient(to right,#3b82f6,#22d3ee)",boxShadow:"0 0 40px rgba(59,130,246,0.25)"}}>
            <div className="absolute inset-0" style={{background:"rgba(255,255,255,0.1)"}}></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 6-7"/>
      </svg>
    ),
    title: "Launch, monitor, optimize",
    description: "Go live with confidence. Monitor every run, get alerts, and improve performance with clear logs and outcomes.",
    tags: ["Real-time logs", "Alerts", "Analytics"],
    visual: (
      <div className="w-full max-w-lg rounded-2xl p-6 relative" style={{background:"#0f1116",border:"1px solid rgba(255,255,255,0.05)"}}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="h-3 w-28 rounded-full mb-2" style={{background:"rgba(255,255,255,0.1)"}}></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{background:"rgba(52,211,153,0.8)"}}></div>
              <div className="h-2.5 w-20 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
            </div>
          </div>
          <div className="h-9 w-28 rounded-xl" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}></div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          {[{color:"rgba(96,165,250,0.8)",w:"160px"},{color:"rgba(52,211,153,0.8)",w:"192px"},{color:"rgba(252,211,77,0.8)",w:"176px"}].map((item,i)=>(
            <div key={i} className="rounded-xl p-4" style={{border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)"}}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{background:item.color}}></div>
                  <div className="h-2.5 rounded-full" style={{width:item.w,background:"rgba(255,255,255,0.1)"}}></div>
                </div>
                <div className="h-2.5 w-14 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
              </div>
              <div className="h-2 w-5/6 rounded-full" style={{background:"rgba(255,255,255,0.05)"}}></div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-10 rounded-xl" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}></div>
          <div className="h-10 w-40 rounded-xl relative overflow-hidden" style={{background:"linear-gradient(to right,#3b82f6,#22d3ee)",boxShadow:"0 0 40px rgba(59,130,246,0.25)"}}>
            <div className="absolute inset-0" style={{background:"rgba(255,255,255,0.1)"}}></div>
          </div>
        </div>
        <div className="mt-5 h-px w-full" style={{background:"linear-gradient(to right,transparent,rgba(255,255,255,0.15),transparent)"}}></div>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{background:"rgba(52,211,153,0.8)"}}></div>
          <div className="h-2.5 w-48 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
          <div className="ml-auto h-2.5 w-20 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}></div>
        </div>
      </div>
    ),
  },
];

function App() {
  return (
    <div style={{background:"#000000",minHeight:"100vh",fontFamily:"Inter,system-ui,sans-serif",color:"white",padding:"48px 24px"}}>
      <style>{`
        @keyframes animationIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .section-wrap { max-width: 1180px; margin: 0 auto; }
        .cards-stack { position: relative; padding-bottom: 12vh; }
        .stack-item {
          position: sticky;
          top: calc(70px + (var(--index, 0) * 22px));
          z-index: var(--z, 1);
          margin-bottom: 16vh;
        }
        .stack-item + .stack-item { margin-top: -26vh; }
        .card {
          background:#02050e;
          border:1px solid rgba(255,255,255,0.08);
          border-radius:32px;
          overflow:hidden;
          position:relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          transform: translate3d(0, calc(var(--index, 0) * 6px), 0);
          animation: cardDrift 10s ease-in-out infinite;
          animation-delay: calc(var(--index, 0) * 0.8s);
          will-change: transform;
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59,130,246,0.05), transparent 35%, transparent 65%, rgba(34,211,238,0.05));
          pointer-events: none;
        }
        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .ghost-num { position:absolute; top:8px; right:16px; font-size:180px; font-weight:600; color:rgba(255,255,255,0.055); line-height:1; pointer-events:none; user-select:none; }
        .icon-circle { width:64px; height:64px; border-radius:50%; background:#0f1219; border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; color:#d4d4d8; flex-shrink:0; box-shadow:0 20px 35px rgba(0,0,0,0.35); }
        .tag { font-size:12px; padding:6px 12px; border-radius:9999px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#e4e4e7; }
        .example-box { border-radius:16px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.05); padding:16px; max-width:480px; margin-top:32px; }
        .example-label { font-size:11px; text-transform:uppercase; letter-spacing:0.15em; color:rgba(147,197,253,0.9); font-weight:600; margin-bottom:8px; }
        .glow-top { position:absolute; top:-40px; left:50%; transform:translateX(-50%); width:176px; height:80px; background:rgba(59,130,246,0.2); filter:blur(55px); border-radius:50%; pointer-events:none; opacity:0.6; }
        .blue-glow { position:absolute; top:-96px; right:-96px; width:288px; height:288px; background:rgba(59,130,246,0.1); filter:blur(80px); border-radius:50%; pointer-events:none; }
        .cyan-glow { position:absolute; bottom:-96px; left:-96px; width:288px; height:288px; background:rgba(34,211,238,0.1); filter:blur(90px); border-radius:50%; pointer-events:none; }
        .top-glow { position:absolute; top:-112px; left:50%; transform:translateX(-50%); width:520px; height:260px; background:rgba(59,130,246,0.1); filter:blur(90px); border-radius:50%; pointer-events:none; }
        @keyframes cardDrift {
          0%, 100% { transform: translate3d(0, calc(var(--index, 0) * 6px), 0); }
          50% { transform: translate3d(0, calc((var(--index, 0) * 6px) - 10px), 0); }
        }
        @media (max-width: 900px) {
          .cards-stack { padding-bottom: 0; }
          .stack-item {
            position: relative;
            top: auto;
            margin-top: 0 !important;
            margin-bottom: 24px;
          }
          .card {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="section-wrap">
        {/* Header */}
        <div style={{display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"64px"}}>
          <div>
            <p style={{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.2em",color:"#60a5fa",fontWeight:600,marginBottom:"12px"}}>How it works</p>
            <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:600,color:"white",letterSpacing:"-0.02em",margin:0}}>Automate in three simple steps</h2>
            <p style={{marginTop:"16px",fontSize:"16px",color:"#a1a1aa",maxWidth:"480px",lineHeight:1.7}}>
              Connect your tools, define your logic, and let Loopra run workflows automatically in the background with AI-powered decisions.
            </p>
          </div>
          <button style={{display:"inline-flex",alignItems:"center",height:"40px",padding:"0 24px",borderRadius:"9999px",background:"#27272a",border:"1px solid #3f3f46",color:"white",fontSize:"13px",fontWeight:500,cursor:"pointer"}}>
            See how it works
          </button>
        </div>

        {/* Cards */}
        <div className="cards-stack">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="stack-item"
              style={{"--index": idx, "--z": idx + 1}}
            >
              <div className="card">
                {idx === 0 && <div className="blue-glow"></div>}
                {idx === 1 && <div className="cyan-glow"></div>}
                {idx === 2 && <div className="top-glow"></div>}

                {/* Radial gradient overlay */}
                <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at top left, rgba(30,58,138,0.25), transparent)",pointerEvents:"none"}}></div>

                {/* Ghost number */}
                <div className="ghost-num">{step.number}</div>

                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"48px",padding:"clamp(32px,5vw,80px)",position:"relative",zIndex:1,alignItems:"center"}}>
                  {/* Left: Visual */}
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"360px",position:"relative"}}>
                    <div className="icon-circle" style={{position:"absolute",left:"-8px",top:"8px",zIndex:10}}>
                      {step.icon}
                    </div>
                    <div className="glow-top"></div>
                    {step.visual}
                  </div>

                  {/* Right: Content */}
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <h3 style={{fontSize:"clamp(28px,3vw,36px)",fontWeight:600,color:"white",marginBottom:"24px",letterSpacing:"-0.02em"}}>{step.title}</h3>
                    <p style={{fontSize:"18px",color:"rgba(212,212,216,0.9)",lineHeight:1.7,maxWidth:"480px"}}>{step.description}</p>

                    {step.tags && (
                      <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"32px"}}>
                        {step.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                    )}

                    {step.example && (
                      <div className="example-box">
                        <div className="example-label">Example</div>
                        <div style={{color:"#e4e4e7",fontSize:"14px"}}>{step.example}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
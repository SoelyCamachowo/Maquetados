export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans antialiased">
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="bg-[#E0EDFF] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Servicios - CMDB
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-4">
            Servicios ↔ CMDB
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Los servicios se definen en tabla y se relacionan con activos en la CMDB.
          </p>
        </div>
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
          Nuevo servicio
        </button>
      </div>
      <div className="flex gap-6">
        <div className="w-3/5 bg-white border border-slate-200 shadow-sm overflow-hidden rounded-xl">
          <div className="p-6 pb-4">
            <h2 className="text-lg font-bold text-slate-800">Servicios</h2>
            <p className="text-sm text-slate-500 mt-1">
              3 servicios . selecciona una fila para ver sus activos
            </p>
          </div>
          <div className="flex bg-slate-50 px-6 py-3 border-y border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="w-2/5">Servicio</div>
            <div className="w-1/5">Estatus</div>
            <div className="w-1/4">Clasificación</div>
            <div className="w-[15%] text-center"># Activos</div>
          </div>

          {/* fila uno */}
          <div className="flex items-center px-6 py-4 bg-[#EFF6FF] border-l-4 border-blue-600 border-b">
            <div className="w-2/5">
              <p className="text-sm font-bold text-[#1D4ED8]">Nomina</p>
              <p className="text-xs text-slate-400 mt-0.5">SVC-PAY-01</p>
            </div>
            <div className="w-1/5">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Activo
              </span>
            </div>
            <div className="w-1/4 text-sm text-slate-600">Critico-N1</div>
            <div className="w-[15%] text-center text-sm font-bold text-slate-800">8</div>
          </div>
          {/* fila dos*/}
          <div className="flex items-center px-6 py-4 border-b border-slate-50">
            <div className="w-2/5">
              <p className="text-sm font-bold text-slate-800">Correo</p>
              <p className="text-xs text-slate-400 mt-0.5">SVC-MAIL-02</p>
            </div>
            <div className="w-1/5">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Activo
              </span>
            </div>
            <div className="w-1/4 text-sm text-slate-600">Medio - N2</div>
            <div className="w-[15%] text-center text-sm font-bold text-slate-800">5</div>
          </div>

          {/* fila tres*/}
          <div className="flex items-center px-6 py-4 border-b border-slate-50">
            <div className="w-2/5">
              <p className="text-sm font-bold text-slate-800">Portal ITSM</p>
              <p className="text-xs text-slate-400 mt-0.5">SVC-ITSM-03</p>
            </div>
            <div className="w-1/5">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Activo
              </span>
            </div>
            <div className="w-1/4 text-sm text-slate-600">Alto - N1</div>
            <div className="w-[15%] text-center text-sm font-bold text-slate-800">12</div>
          </div>
        </div>

        <div className="w-2/5 rounded-xl bg-white border border-slate-200 shadow-sm p-6 h-fit">
        <h2 className="text-base font-bold text-slate-800">
          Activos del servixio de Nomina</h2>
          <div className="flex items-center gap-2 mt-3 mb-6">
            <span className="bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-2.5 py-1 rounded-md">
              3 activos relacionados </span>
            <span className=" text-xs text-slate-500">
              en la CMDB </span>
          </div>
          <div className="flex items-center gap-4 border border-slate-200 rounded-xl p-4 mb-3">
           <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#E0EDFF] text-[#2563EB] font-bold text-xs">
            DB</div>
            <p className="text-sm font-bold text-slate-800">
              SRV-DB-01. Servidor BD</p>
            <p className="text-xs text-slate-500 mt-0.5">
              Producción</p>
          </div>
          {/*fila 2*/}
          <div className="flex items-center gap-4 border border-slate-200 rounded-xl p-4 mb-3">
           <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EDE9FE] text-[#7C3AED] font-bold text-xs">
            APP</div>
            <p className="text-sm font-bold text-slate-800">
            SRV-APP-02 .App Server </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Producción</p>
          </div>
          {/*flia 3*/}
          <div className="flex items-center gap-4 border border-slate-200 rounded-xl p-4 mb-3">
           <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#DCFCE7] text-[#16A34A] font-bold text-xs">
            SAN</div>
            <p className="text-sm font-bold text-slate-800">
            San-01 .Almacenamiento </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Producción</p>
          </div>
          </div>
        </div>
       <div className="mt-8 bg-slate-100 border border-slate-200 border-l-4 border-l-blue-600 rounded-lg p-6">
         <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#E0EDFF] text-[#2563EB] font-bold px-2 py-0.5 rounded uppercase">
            CORRELACIÓN</span>
            <p className="text-sm font-bold text-slate-800">
              Ticket ↔ Servicio ↔ Activos</p>
              <span className="bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold pc-2 py-0.5 rounded">
                No es monitoreo</span>    
         </div>
         <div text-sm ext-slate-500 leading-relaxed>
          Al asociar un ticket a un servicio, el sistema consulta los activos afectados y correlaciona las incidencias. Si un hardware falla, muestra los servicios afectados. La detección es por reporte del usuario (no es monitoreo); integración futura vía API, p. ej. ServiceNow.
         </div>
       </div>
      </div>
    
  )
}
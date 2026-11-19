export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans antialiased">
       <div className="flex justify-between items-start mb-8">
        <div>
          <span className="bg-[#E0EDFF] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            MÓDULO DE CAMBIOS 
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-4">
            Catálogo de cambios rutinarios 
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Cambios praprobados por sistema y responsable
          </p>
        </div>
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
          Nuevo cambio rutinario
        </button>
      </div>
       
        <div className="w-full bg-white border border-slate-200 shadow-sm overflow-hidden rounded-xl">
         
          <div className="flex bg-slate-50 px-6 py-3 border-y border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="w-[30%]">CAMBIO RUTINARIO</div>
            <div className="w-[25%]">SISTEMA/APLICATIVO</div>
            <div className="w-[30%]">RESPONSABLES AUTORIZADOS</div>
            <div className="w-[15%] text-center">ESTADOS</div>
          </div>
           {/* fila uno */}
          <div className="flex items-center px-6 py-4 bg-[#FFFFFF] border-b">
            <div className="w-[30%]">
              <p className="text-sm font-bold">Reinicio de servicio IT</p>
            </div>
            <div className="w-[25%]">
              <p className="text-sm text-[#5A6572]">Aplicatico ITSM </p>
            </div>
             <div className="w-[30%]">
              <p className="text-sm text-[#5A6572]">Rubén López Giovanni R.</p>
            </div>
             <div className="w-[15%] text-center">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Preaprobado
              </span>
            </div>
            </div>
            {/* fila dos */}
            <div className="flex items-center px-6 py-4 bg-[#FFFFFF] border-b">
            <div className="w-[30%]">
              <p className="text-sm font-bold">Aplicación de parche menor</p>
            </div>
            <div className="w-[25%]">
              <p className="text-sm text-[#5A6572]">Infraestructura</p>
            </div>
             <div className="w-[30%]">
              <p className="text-sm text-[#5A6572]">Giovanni R.</p>
            </div>
             <div className="w-[15%] text-center">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Preaprobado
              </span>
            </div>
            </div>
            {/* fila tres */}
            <div className="flex items-center px-6 py-4 bg-[#FFFFFF] border-b">
            <div className="w-[30%]">
              <p className="text-sm font-bold">Respaldo programado de BD</p>
            </div>
            <div className="w-[25%]">
              <p className="text-sm text-[#5A6572]">BD Producción</p>
            </div>
             <div className="w-[30%]">
              <p className="text-sm text-[#5A6572]">Ruben López</p>
            </div>
             <div className="w-[15%] text-center">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Preaprobado
              </span>
            </div>
            </div>
             {/* fila cuatro */}
            <div className="flex items-center px-6 py-4 bg-[#FFFFFF] border-b">
            <div className="w-[30%]">
              <p className="text-sm font-bold">Rotación de logs</p>
            </div>
            <div className="w-[25%]">
              <p className="text-sm text-[#5A6572]">Servidores de app</p>
            </div>
             <div className="w-[30%]">
              <p className="text-sm text-[#5A6572]">Ruben López,Giovanni R.</p>
            </div>
             <div className="w-[15%] text-center">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-semibold">
                Preaprobado
              </span>
            </div>
            </div>
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center gap-3">
          <p className="text-sm text-slate-500">
            ⓘ La ventana de tiempo no aplica para rutinarios (ya estan preaprobados) . Al seleccionarlos se notifica a las areas afectadas
          </p>
      </div>
      </div>
    </div>
  )
}
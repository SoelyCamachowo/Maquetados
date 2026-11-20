export default function Maquetado1() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mb-8">
        <span className="bg-[#E0EDFF] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full">
          MÓDULO DE CAMBIOS
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mt-4">
          Cambio #CHG-0031
        </h1>
        <p className="text-slate-500 mt-1">
          Actualización de firmware del PLC - Línea de producción 5.
        </p>
      </div>

      <div className="flex gap-6">
        <div className= "w-2/3 flex flex-col gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800">
            Cliclo de vida</h2>
            <div className="flex items-center gap-2 mt-4">
              <span className="rounded-full px-3 py-1 bg-[#DCFCE7] text-[#16A34A] text-sm font-medium">Abierto</span>
              <span className="text-slate-300">→</span>
              <span className="rounded-full px-3 py-1 bg-[#DCFCE7] text-[#16A34A] text-sm font-medium">En planeacion</span>
              <span className="text-slate-300">→</span>
               <span className="rounded-full px-3 py-1 bg-[#1E293B] text-[#FFFFFF] text-sm font-medium">Programado</span>
              <span className="text-slate-300">→</span>
              <span className="rounded-full px-3 py-1 bg-[#cec5c5] text-[#64748B] text-sm font-medium">En progreso</span>
              <span className="text-slate-300">→</span>
              <span className="rounded-full px-3 py-1 bg-[#cec5c5] text-[#64748B] text-sm font-medium">Cerrado</span>
            
            </div>
            <p className="txt-sm text-slate-500 mt-4">Pasa a en progreso automaticamente en la fecha programada; a Cerrado tras el periodo de monitoreo</p>
            
        </div>

         <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-slate-800">
            Ventana de tiempo</h2>
            <span className="rounded-full px-3 py-1 bg-[#DCFCE7] text-[#16A34A] text-sm font-medium">✓ Suficiente</span>
         </div>
         <div className="flex justify-between mb-3">
          <span className="text-sm textslate-500">ventana solicitada</span>
          <span className="font-bold text-[#16A34A]">6 h</span>
         </div>
         <div className="flex justify-between mb-3">
           <span className="text-sm text-slate-500">Requerida (ejecucion + rollback)</span>
          <span className="font-bold text-slate-800">≥ 5 h</span>
          </div> 
          <div className="w-full h-3 bg-slate-200 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-[#16A34A] w-5/6 rounded-full"></div>
            
        </div>
        <div className="mt-4 p-3 bg-[#EEFAF1] rounded-lg">
          <p className="text-sm text-[#15803D] font-medium">La ventana de 6h cubre el total e incluye margen</p>
        </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Resumen enviado al aprobador </h2>
            <span className="bg-[#E0EDFF] text-[#2563EB] text-xs font-medium px-3 py-1 rounded-full">
              Automatico
            </span> 
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">objetivo</span>
          <span className="font-bold text-slate-800">Actualizar firmware del PLC v13 - v14</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">Criterio de exito</span>
          <span className="font-bold text-slate-800">Firmware v14; sin caídas del servicio 24 h</span>
          </div>

           <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">Fecha de ejecuci&oacute;n</span>
          <span className="font-bold text-slate-800">12 jul 2026</span>
          </div>

           <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">Ventana solicitada</span>
          <span className="font-bold text-slate-800">6h</span>
          </div>

          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
           <p className="text-sm text-slate-500">
            El aprobador recibe este resumen (objetivo, criterio, fecha y tiempo), no los planes técnicos detallados
            </p> 
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Aprobacion por area
          </h2>
          <div className="flex bg-slate-50 p-3 rounded-t-lg border-b border-slate-200 text-sm font-semibold text-slate-500">
            <div className="w-1/4">Area / Sistema</div>
            <div className="w-1/4">Responsable</div>
            <div className="w-1/6">Estado</div>
            <div className="flex-1">Acción</div>
          </div>

          {/* fila 1 produccion */}
          <div className="flex items-center p-3 border-b border-slate-100 text-sm">
            <div className="w-1/4 font-semibold text-slate-800">Producción</div>
            <div className="w-1/4 text-slate-500">G. Ramirez</div>
            <div className="w-1/6">
              <span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-1 rounded-full text-xs font-medium">
                Aprobado
              </span>
            </div>
            <div className="flex-1 text-slate-400">—</div>
          </div>

          {/* fila 2 ITSM */}
          <div className="flex items-center p-3 text-sm">
            <div className="w-1/4 font-semibold text-slate-800">ITSM</div>
            <div className="w-1/4 text-slate-500">R. Lopez</div>
            <div className="w-1/6">
              <span className="bg-[#FEF3C7] text-[#B45309] px-2 py-1 rounded-full text-xs font-medium">
                Pendiente
              </span>
            </div>
            <div className="flex-1 flex gap-2">
              <button className="bg-slate-800 text-white px-3 py-1 rounded-md text-xs font-medium">Aceptar</button>
              <button className="border border-slate-300 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">Rechazar</button>
              <button className="border border-slate-300 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">Proponer fecha</button>
            </div>
          </div>

        
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            Una sola objeción detiene el cambio: basta con que un área lo rechace para frenarlo.
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Evidencias de Exito</h2>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center bg-slate-50">
              <p className="text-sm font-semibold text-slate-700">Adjuntar evidencia de los criterio de exito</p>
              <p className="text-xs text-slate-500 mt-1">Arrastra archivos aqui o haz clic para subir - JPG,PMG,PDF</p>
            </div>
            <div className="mt-4 p-3 bg-[#FFF9EC] border border[#F0E2BE] rounded-lg text-sm text-[#7A6320] font-medium">
              Obligatorio para cerrar el cambio como Exitoso
            </div>
        </div>

        </div> 

       {/* columna derecha*/}
        <div className=" w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6"> 
          <h2 className="text-lg font-semibold text-slate-800 mb-3">Detalle</h2>
          <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold text-slate-500">solicitante</span>
            <span className="tezt-sm font-semibold text-slate-800">Ruben Lopez</span>
            </div>
            <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold text-slate-500">Responsable</span>
            <span className="tezt-sm font-semibold text-slate-800">G.Ramirez</span>
            </div>
            <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold text-slate-500">Tipo</span>
            <span className="tezt-sm font-semibold text-slate-800">Normal</span>
            </div>
            <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold text-slate-500">Areas</span>
            <span className="tezt-sm font-semibold text-slate-800">Produccion,ITSM</span>
            </div>
            <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold text-slate-500">Fecha de ejecucion</span>
            <span className="tezt-sm font-semibold text-[#2563EB]">12 jul 2026</span>
            </div>
        
        </div>  
        <div className="bg-white rounded-xl shadow-sm p-6">
         <h2 className="text-lg font-semibold text-slate-800 mb-4"> Historial de reprogramaciones</h2>
         <div className="mb-4">
          <p className="text-sm font-bold text-slate-800">03 jul → 08 jul</p>
          <p className="text-sm text-slate-500">Motivo: ventana de Produccion</p>
          <p className="text-sm font-bold text-slate-800">08 jul → 12 jul</p>
          <p className="text-sm text-slate-500">Motivo: no hubo paro de linea</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Historial de ejeccuiones</h2>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-slate-800">Intento 1</span>
            <span className="bg-[#FEE2E2] text-[#DC2626] font-medium px-2 py-1 rounded-full">
              No exitoso
            </span>
          </div>
          <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-800">Intento 2</span>
            <span className="bg-[#FFEDD5] text-[#EA580C] font-medium px-2 py-1 rounded-full">
              En curso
            </span>
          </div>  
        </div> 

      </div>

      </div>
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-4 py-2 border border-slate-300 bg-white text-slate-700 font-medium rounded-lg text-sm">
          Reprogramar
        </button>
         <button className="px-4 py-2 border border-slate-300 bg-white text-slate-700 font-medium rounded-lg text-sm">
          Marcar no exitoso
        </button>
        <button className="px-4 py-2 border border-slate-300 bg-[#1E293B] text-white font-medium rounded-lg text-sm">
          Marcar exitoso
        </button>

      </div>
    </div>
  )
}
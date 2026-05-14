export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-4xl rounded-[12px] border border-white/10 bg-[#111]/90 p-6 shadow-[0_0_45px_rgba(85,56,131,0.16)] sm:p-10">
        <div className="section-heading">
          <p>Contacto</p>
          <h2>Trabajemos juntos</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-normal normal-case leading-7 tracking-normal text-zinc-400">
            ¿Tenes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar con vos.
          </p>
        </div>
        <form className="mt-10 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Nombre
              <input className="field-input" type="text" placeholder="Agos" />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" type="email" placeholder="hola@email.com" />
            </label>
          </div>
          <label className="field-label">
            Mensaje
            <textarea className="field-input min-h-36 resize-none" placeholder="Contame tu idea" />
          </label>
          <button type="button" className="btn-primary mx-auto">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

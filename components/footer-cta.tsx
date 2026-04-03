"use client"

import { motion } from "framer-motion"
import { GlassWater } from "lucide-react"
import { dadosCliente } from "@/data/cliente"

export default function FooterCTA() {
  return (
    <section className="relative bg-solid-dark py-16 px-6 md:px-16 flex flex-col items-center justify-center gap-8 overflow-hidden" style={{ backgroundColor: '#080D21' }}>
      {/* Orbes de luz sutis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl opacity-40" />
      </div>
      <div className="relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-3xl md:text-4xl font-bold text-center text-gradient-gold"
      >
        Pronto para um atendimento rápido?
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="text-gray-300 text-center max-w-lg text-lg"
      >
        Não espere mais! Solicite um orçamento agora mesmo e conte com atendimento especializado 24 horas.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
        {/* Botão Solicitar Reboque */}
        <motion.a
          href={dadosCliente.contato.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(218, 165, 32, 0.5)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(218, 165, 32, 0.7)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-amber-600 hover:bg-amber-500 text-blue-950 font-bold text-base rounded-lg shadow-lg transition-colors duration-300 touch-manipulation"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Solicitar Orçamento
        </motion.a>

        <motion.a
          href={dadosCliente.contato.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(218, 165, 32, 0.5)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(218, 165, 32, 0.7)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-amber-600 bg-transparent hover:bg-amber-600 hover:text-blue-950 text-amber-600 font-extrabold rounded-lg transition-colors duration-300 text-center text-lg touch-manipulation"
        >
          <GlassWater className="h-5 w-5" />
          {dadosCliente.contato.telefone}
        </motion.a>
      </div>

      {/* Endereço */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="text-center mt-4"
      >
        <p className="text-gray-300 text-sm md:text-base flex items-center justify-center gap-2">
          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.94 8.75 8.75 8.75 1.395 0 2.745-.348 3.910-.965l7.08 7.08c.585.585 1.535.585 2.12 0l.707-.707c.586-.585.586-1.535 0-2.12l-7.08-7.08c.617-1.165.965-2.515.965-3.91C20.75 5.94 16.84 2 12 2zm0 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
          {dadosCliente.contato.endereco}
        </p>


      </motion.div>
      </div>
    </section>
  )
}

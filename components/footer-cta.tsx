"use client"

import { motion } from "framer-motion"
import { MessageCircle, Smartphone } from "lucide-react"
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
          <MessageCircle className="h-5 w-5" />
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
          <Smartphone className="h-5 w-5" />
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

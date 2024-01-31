// next.config.js
module.exports = {
    // Configurações do ambiente
    env: {
      CUSTOM_VARIABLE: 'valor personalizado',
    },
  
    // Configurações de webpack (se necessário)
    webpack: (config, { isServer }) => {
      // Modificações específicas do webpack
      if (isServer) {
        // Configurações do servidor
      } else {
        // Configurações do cliente
      }
  
      return config;
    },
  
    // Configurações adicionais
    images: {
      domains: ['example.com'],
    },
  
    // Outras configurações...
  };
  
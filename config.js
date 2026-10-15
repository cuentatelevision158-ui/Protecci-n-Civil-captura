// Conexión a Supabase. La llave "publishable" es pública por diseño: la protección de los datos
// la dan el inicio de sesión y las reglas de seguridad (RLS) de la base. NUNCA poner aquí la llave service_role.
// Para cambiar de proyecto (pruebas -> definitivo) basta con cambiar estos dos valores y publicar de nuevo.
window.PC_CONFIG = {
  url: 'https://xjfarwnsoncchtjlgtag.supabase.co',
  key: 'sb_publishable_iN-JjwgQ7HeR0XqGZZWAdg_xDRsmWTI',
  dominioCorreo: 'pc-ixhuatlan.local'   // permite entrar escribiendo solo "compa1"
};

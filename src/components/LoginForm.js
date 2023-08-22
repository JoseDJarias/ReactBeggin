// ES UN COMPONENTE CON 2 INPUNTS Y UN BOTON
// EL BOTON VA A EJECUTAR EL EVENTO QUE RECIBE COMO PARAMETRO
import '../form.css'
function LoginForm({ onLogin }) {
    return (
      <div className='login-form'>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
         
        />
        <input
          type="password"
          placeholder="Contraseña"
        />
        <button onClick={onLogin}>Iniciar sesión</button>
      </div>
    );
  }
  
  export default LoginForm;
  
  
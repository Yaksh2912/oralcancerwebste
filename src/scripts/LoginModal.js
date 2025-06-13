// // src/scripts/LoginModal.js
// import React, { useState, useEffect } from 'react';
// import '../assets/styles/LoginModal.css';

// const LoginModal = ({ show, onClose, isLogin, toggleMode }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState('');

//   useEffect(() => {
//     const handleEscape = (e) => e.key === 'Escape' && onClose();
//     if (show) document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, [show, onClose]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({});
//     setSuccessMsg('');
//   };

//   const validate = () => {
//     let err = {};
//     if (!formData.email.includes('@')) err.email = 'Invalid email';
//     if (formData.password.length < 6) err.password = 'Password too short';
//     if (!isLogin && !formData.name.trim()) err.name = 'Name is required';
//     return err;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }

//     const user = { email: formData.email, password: formData.password };
//     if (isLogin) {
//       const savedUser = JSON.parse(localStorage.getItem(formData.email));
//       if (savedUser?.password === formData.password) {
//         setSuccessMsg('Login successful!');
//       } else {
//         setErrors({ login: 'Invalid credentials' });
//       }
//     } else {
//       localStorage.setItem(formData.email, JSON.stringify({ ...formData }));
//       setSuccessMsg('Signup successful! You can now login.');
//       setFormData({ name: '', email: '', password: '' });
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && onClose()}>
//       <div className="modal-content">
//         <button className="close-btn" onClick={onClose}>×</button>
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

//         <form className="modal-form" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <p className="error-text">{errors.name}</p>}
//             </>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p className="error-text">{errors.email}</p>}

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p className="error-text">{errors.password}</p>}
//           {errors.login && <p className="error-text">{errors.login}</p>}

//           <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//         </form>

//         {successMsg && <p className="success-text">{successMsg}</p>}

//         <p onClick={toggleMode} className="toggle-link">
//           {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;



// src/scripts/LoginModal.js
import React, { useState, useEffect } from 'react';
import '../assets/styles/LoginModal.css';
import { useTranslation } from 'react-i18next';

const LoginModal = ({ show, onClose, isLogin, toggleMode }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    if (show) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [show, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setSuccessMsg('');
  };

  const validate = () => {
    let err = {};
    if (!formData.email.includes('@')) err.email = t('errors.invalidEmail');
    if (formData.password.length < 6) err.password = t('errors.shortPassword');
    if (!isLogin && !formData.name.trim()) err.name = t('errors.nameRequired');
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const user = { email: formData.email, password: formData.password };
    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem(formData.email));
      if (savedUser?.password === formData.password) {
        setSuccessMsg(t('messages.loginSuccess'));
      } else {
        setErrors({ login: t('errors.invalidCredentials') });
      }
    } else {
      localStorage.setItem(formData.email, JSON.stringify({ ...formData }));
      setSuccessMsg(t('messages.signupSuccess'));
      setFormData({ name: '', email: '', password: '' });
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && onClose()}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isLogin ? t('auth.login') : t('auth.signup')}</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder={t('placeholders.name')}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder={t('placeholders.email')}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder={t('placeholders.password')}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          {errors.login && <p className="error-text">{errors.login}</p>}

          <button type="submit">{isLogin ? t('auth.login') : t('auth.signup')}</button>
        </form>

        {successMsg && <p className="success-text">{successMsg}</p>}

        <p onClick={toggleMode} className="toggle-link">
          {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;

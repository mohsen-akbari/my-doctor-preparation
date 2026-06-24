import { Bounce, ToastContainer } from "react-toastify";

export default function ToasterComponent(props) {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      {...props}
    />
  );
}

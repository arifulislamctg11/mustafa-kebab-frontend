import { HiMiniBars3 } from "react-icons/hi2";
const Modal=()=>{
    return(
        <>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_3').showModal()}><HiMiniBars3 className="text-2xl" /></button>
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box bg-white ">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl mt-3 text-black">✕</button>
    </form>
    <h3 className="font-bold text-xl text-black">My account</h3>
    <div className="text-xl font-semibold flex justify-between mt-5 ">
      <button className="text-black bg-slate-200  px-10 md:px-16 py-1 rounded-full">Sign in</button>
      <button className="text-white bg-orange-600 px-4 md:px-8 py-1 rounded-full">Create account</button>
    </div>
  </div>
</dialog>
        </>
    )
}
export default Modal;
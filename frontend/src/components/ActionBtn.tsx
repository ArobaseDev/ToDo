export default function ActionBtn ({ moreClass, theme= 'primary' ,label='', ...restProps }) {
  return (
    <>
    <button className={`${moreClass}  btn btn-${theme} ms-2`} {...restProps} >
        {label}
      </button>
    </>
  )
}
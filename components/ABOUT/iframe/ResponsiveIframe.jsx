
const ResponsiveIframe = ({src, children, ...props}) => {
  return (
    <div className="overflow-hidden pt-[66.35%] relative">
        {
        
        children ? children: <iframe
        className="h-[100%] top
         w-[100%] border-0 absolute left-0"
         src={src}
         {...props}
        ></iframe>
        
        }
    </div>
  )
}

export default ResponsiveIframe
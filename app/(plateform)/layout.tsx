import { ClerkProvider } from "@clerk/nextjs"


const PlateformLayout = ({children}: {children: React.ReactNode}) =>{
    return (
       <ClerkProvider>
         {children}
       </ClerkProvider>
    
    )
}

export default PlateformLayout;

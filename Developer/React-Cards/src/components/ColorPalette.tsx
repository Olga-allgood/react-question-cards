
import { Button as AntButton, Space } from "antd";
interface ColorPaletteProps {
colors: string[],
selectColor: (color:string) => void,
}
const ColorPalette = ({colors, selectColor}: ColorPaletteProps) => {
    return (

        <Space>
         {colors.map((color) => (
            <AntButton 
                  key={color} 
                  onClick={()=>selectColor(color)}
                  type="default"
                  style={{ 
                    backgroundColor: color, 
                    
                    color:  ["yellow", "pink"].includes(color)? "black":"white", 
                }}
                  >{color}
                  
                </AntButton>
         ))}
         </Space>


    )
}
export default ColorPalette;
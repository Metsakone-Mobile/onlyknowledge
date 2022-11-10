import { View, Text } from 'react-native'
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker'

export default function Pickers() {



  const [open, setOpen] = useState(false)

  //parentluokat arrayssa

  const [value, setValue] = useState(['luonnontieteet', 'tanssi']);


  //eri aihealueet parentteineen
  const [items, setItems] = useState([

    {label: 'Luonnontieteet', value: 'luonnontieteet'},
    {label: 'Fysiikka', value: 'fysiikka', parent: 'luonnontieteet'},
    

    {label: 'Tanssi', value: 'tanssi'},
    {label: 'Letkajenkka', value: 'letkajenkka', parent: 'tanssi'},

  ]);

  //jätetään tyylittely toistaiseksi returnin sisään

  return (
    <View style={{
      
      
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    }}>
      <DropDownPicker
        placeholder="Aihealueet"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51"]}
      />
    </View>
  )
}
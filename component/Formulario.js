import React, {Fragment, useState} from 'react'
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


/**
* @author Leonard Cuenca 
* @function @Formulario
**/

const Formulario = (props) => {

        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      
        const showDatePicker = () => {
          setDatePickerVisibility(true);
        };
      
        const hideDatePicker = () => {
          setDatePickerVisibility(false);
        };
      
        const handleConfirm = (date) => {
          console.warn("Agenda tu Cita: ", date);
          hideDatePicker();
        };


  return (
    <Fragment>
        <View>
        <View style={styles.formulario}>
            <Text style={styles.label}>Paciente: </Text>
            <TextInput 
                style={styles.input}
                onChangeText={ (texto) => console.log(texto) }
                keyboardType = 'default'
            
            />
        </View>

        <View style={styles.formulario}>
            <Text style={styles.label}>Propietario: </Text>
            <TextInput 
                style={styles.input}
                onChangeText={ (texto) => console.log(texto) }
                keyboardType = 'default'
            
            />
        </View>

        <View style={styles.formulario}>
            <Text style={styles.label}>Telefono: </Text>
            <TextInput 
                style={styles.input}
                onChangeText={ (texto) => console.log(texto) }
                keyboardType = 'numeric'
            
            />
        </View>  
        
        <View style={styles.formulario}>
            <Text style={styles.label}>Sintomas: </Text>
            <TextInput 
                multiline
                style={styles.input}
                onChangeText={ (texto) => console.log(texto) }
                
            
            />
        </View>  

        <View>
            <Button title="Agenda Tu Cita" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
            

        </View>
    </Fragment>
    )
  }

   const styles = StyleSheet.create ({
    label: {
        fontWeight:'bold', 
        fontSize:18, 
        marginTop:20, 
        
    },
    input:{
        marginTop:10, 
        height:50, 
        borderColor:'#E1E1E1', 
        borderWidth:1, 
        borderStyle:'solid',
        borderTopEndRadius:5,
        borderTopStartRadius:5, 
        borderTopLeftRadius:5, 
        borderTopRightRadius:5,
        backgroundColor:'#FFF'
    }, 
    formulario:{
        paddingHorizontal:10, 
        //paddingVertical:10, 
        backgroundColor:'#969faf', 
        marginHorizontal:5

        

    }

  });

export default Formulario;
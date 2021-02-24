import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

 const App = () => {

  //definir el state
  const [citas, setCitas] = useState([
    {id:1, paciente: "Hook",       propietario:'Leo01', sintomas: "No come"   }, 
    {id:2, paciente: "Redux",      propietario:'Leo02', sintomas: "No Duerme" }, 
    {id:3, paciente: "Context",    propietario:'Leo03', sintomas: "No Canta"  }, 
    {id:4, paciente: "StyleSheet", propietario:'Leo04', sintomas: "No camina" }, 
  ]); 

 /*Notas Importantes */
 // Los Flat List tienen propiedades de que permiten manupular los datos de un objeto e iterarlo
 //Data -> Puedes pasar un objeto 
 //renderItem -> funciona como un for, map, foreach pero para poder acceder a el debemos usar la propiedad item ejemplo citas.item.nombre 
  
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      
      <FlatList
        data={citas}
        keyExtractor={cita => cita.id}
        renderItem = { (cita) => (
            <View > 
            <Text> {cita.item.paciente}</Text>
            </View> 
        )}
      />
    </View>
  );
}
/*Forma de anexar estilos */

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#AA076b',
    flex:1
  }, 
  titulo:{
    color:'#FFF',
    marginTop:40, 
    fontSize:24, 
    fontWeight:'bold', 
    textAlign:'center',

  }
})

export default App;
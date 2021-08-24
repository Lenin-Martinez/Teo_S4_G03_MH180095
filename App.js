import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
    const[text1,settext1]=useState('');
  const[text2,settext2]=useState('');
  const[resultS,setresultS]=useState('');
  const[resultR,setresultR]=useState('');
  const[resultM,setresultM]=useState('');
  const[resultD,setresultD]=useState('');

  function Sumar(var1,var2){
    if(var1 === '' || var2 === '')
    {
      var resul="Por favor digite los numero";
      setresultS(resul);
      setresultR('');
      setresultM('');
      setresultD('');
    }
    else
    {
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a+b;
    var resul="resultado suma: "+a+"+"+b+"="+c;
    setresultS(resul);
    }
  }

  function Restar(var1,var2){
    if(var1 === '' || var2 === '')
    {
      var resul="Por favor digite los numero";
      setresultR(resul);
      setresultS('');
      setresultM('');
      setresultD('');
    }
    else
    {
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a-b;
    var resul="resultado resta: "+a+"-"+b+"="+c;
    setresultR(resul);
    }
  }

  function Multiplicacion(var1,var2){
    if(var1 === '' || var2 === '')
    {
      var resul="Por favor digite los numero";
      setresultM(resul);
      setresultS('');
      setresultR('');
      setresultD('');
    }
    else
    {
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a*b;
    var resul="resultado multiplicacaion: "+a+"*"+b+"="+c;
    setresultM(resul);
    }
  }

  function Division(var1,var2){
    if(var1 === '' || var2 === '')
    {
      var resul="Por favor digite los numero";
      setresultD(resul);
      setresultS('');
      setresultR('');
      setresultM('');
    }
    else
    {
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a/b
    var resul="resultado division: "+a+"/"+b+"="+c;
    setresultD(resul);
    }
  }

  return (
 <View style={styles.container}>
      <Text style={{padding:15, fontSize:24, backgroundColor:'orange',color:'white', textAlign:'center'}}>
        Calculo de operaciones basicas
      </Text>
      <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 1'
      keyboardType='numeric'
      onChangeText={(text1)=>settext1(text1)}
      />
          <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 2'
      keyboardType='numeric'
      onChangeText={(text2)=>settext2(text2)}
      />

<TouchableOpacity //Boton accion suma
style={{height:50, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Sumar(text1,text2)}} 
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Suma...
</Text>
</TouchableOpacity>
<Text style={{fontSize:32}}>{resultS}</Text>

<TouchableOpacity  //Boton accion resta
style={{height:50, backgroundColor:'purple', marginTop:10}}
onPress={()=>{Restar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Resta...
</Text>
</TouchableOpacity>
<Text style={{fontSize:32}}>{resultR}</Text>


<TouchableOpacity  //Boton accion Multiplicar
style={{height:50, backgroundColor:'green', marginTop:10}}
onPress={()=>{Multiplicacion(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  multiplicacaion...
</Text>
</TouchableOpacity>
<Text style={{fontSize:32}}>{resultM}</Text>


<TouchableOpacity  //Boton accion Dividir
style={{height:50, backgroundColor:'red', marginTop:10}}
onPress={()=>{Division(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Division...
</Text>
</TouchableOpacity>
<Text style={{fontSize:32}}>{resultD}</Text>

</View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

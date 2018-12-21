import React from 'react';  
import { StyleSheet, TextInput, View } from 'react-native'; 
import PropTypes from 'prop-types';
 export default class SearchInput extends React.Component { 
 //constroctor method to initialize the component's state and control actual data.
  constructor(props) { 
    super(props);
     this.state = 
     { text: '', 
  };
 }
// handleChangeText method that modifies our location prop value when
// the user changes the text within the input.
 handleChangeText = text => {
    this.setState({ text }); 
  };
  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

 
  /*this method save the location.
  handleChangeText = (newLocation) => { 
    this.props.location = newLocation; 
  } ; */

  render() { 
    const {placeholder} = this.props;
    const {text } =this.state;
    
    return ( 
     <View style={styles.container}>
         
         <TextInput
         autoCorrect={false}
        //The value prop is responsible for the content showed in the input field.
         value={text}
         placeholder={placeholder} 
        //placeholder={this.props.placeholder}
          placeholderTextColor="white"   
          underlineColorAndroid="transparent" 
         style={styles.textInput}   
         clearButtonMode="always"
         //onChangeTextispurelyresponsibleforstoringthelatest typed input value into 
         //the local state of the component.
         onChangeText={this.handleChangeText}
         onSubmitEditing={this.handleSubmitEditing}
          />    
          </View>
      ); 
    }
 } 

 SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};


           const styles = StyleSheet.create({
                container: { 
                    height: 40,
                    marginTop: 20, 
                 backgroundColor: '#666', 
  marginHorizontal: 40, 
  paddingHorizontal: 10, 
  borderRadius: 5,
    },  
 textInput: {
     
     flex: 1, 
    
     color: 'white', 
   
  }, 
 });

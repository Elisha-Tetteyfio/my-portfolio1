const time = new Date().getHours();
let lightTheme;

const setDefaultTheme = () => {
  if(6<time && time<18){
    lightTheme=true;
  }else{
    lightTheme=false;
  }
}

setDefaultTheme();

export const changeTheme = () => {
  return {
    type: "CHANGE"
  }
}

const isLightTheme = (state = lightTheme, action) => {
  switch(action.type){
    case 'CHANGE': 
      return !state
    default: {
      return state
    }
  }
}

export default isLightTheme;

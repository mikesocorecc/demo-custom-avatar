import { reactive, ref } from 'vue'
import shirts from '../assets/shirts/shirts' 
import hairs from '../assets/hairs/hairs'  

export default function useAvatar() {
  const skins = ["#F3A396","#ffdbb4","#edb98a","#fd9841","#fcee93","#d08b5b","#ae5d29","#614335"];
  const eyesColor = ["#545454","#65c9ff","#5199e4","#25557c","#e6e6e6","#929598","#a7ffc4","#ffdeb5","#ffafb9","#ffffb1","#ff5c5c","#e3adff"];
  const alert = ref(null);
  const svgBody = ref(null);
  // Formats
  const formatSvg = shirts => Object.entries(shirts).map(([key, value]) => ({ type: 'svg', name: key, value: value }));
  const formatColors = skins => skins.map(color => ({ type: 'color', name: color, value: color }));
  
  const shirtsOptions = ref(formatSvg(shirts));
  const hairsOptions = ref(formatSvg(hairs));
  const skinsOptions = ref(formatColors(skins))
  const eyesColorsOptions = ref(formatColors(eyesColor))
 
  const avatarOptions = reactive({
    skin: '',
    eye: '',
    seyebrow: '',
    mouth: '',
    hairstyle: '',
    hairColor: '',
    facialHair: '',
    shirt: {
      name: '',
      svg: ''
    },
    hair: {
      name: '',
      svg: ''
    },
    fabricColor: '',
    backgroundColor: '',
    glass: '',
    glassOpacity: '',
    accessories: '',
    currentSkinColor: '',
    currentHairstyle: '',
    currentHairColor: '',
    currentFabricColor: '',
    currentBackgroundColor: '',
    currentGlassOpacity: ''
  })

  // Leer avatarOptions de localStorage al inicializar
  const savedAvatarOptions = localStorage.getItem('avatarOptions')
  if (savedAvatarOptions) {
    Object.assign(avatarOptions, JSON.parse(savedAvatarOptions))
    if (avatarOptions.shirt && avatarOptions.shirt.name) {
      avatarOptions.shirt.svg = shirts[avatarOptions.shirt.name]
    }
    if (avatarOptions.hair && avatarOptions.hair.name) {
      avatarOptions.hair.svg = hairs[avatarOptions.hair.name]
    }
    
  }

  const changeShirt = (typeShirt) => {
    avatarOptions.shirt.name = typeShirt
    avatarOptions.shirt.svg = shirts[typeShirt]
  }
  const changeHair = (typeHair) => { 
    avatarOptions.hair.name = typeHair
    avatarOptions.hair.svg = hairs[typeHair]
  }
  const changeSkin = (skinColor) => { 
    if (svgBody.value) {
      const svgElements = svgBody.value.querySelectorAll('path[data-skin]');
      svgElements.forEach(el => { 
        el.setAttribute('fill', skinColor);
      });
    }
    avatarOptions.skin = skinColor 
  }   
  const changeEyeColor = (eyeColor) => {
    if (svgBody.value) {
      const rightEye = svgBody.value.querySelector('#eye_right');
      const leftEye = svgBody.value.querySelector('#eye_left');
  
      if (rightEye) {
        rightEye.setAttribute('fill', eyeColor);
      }
      if (leftEye) {
        leftEye.setAttribute('fill', eyeColor);
      }
    }
    avatarOptions.eye = eyeColor; // Asegúrate de que esta es la propiedad correcta para guardar el color del ojo
  }
  
  // Guardar los cambios en localstorage
  const saveChanges = () => {
    // 1. Clonar avatarOptions.value
    const avatarToSave = JSON.parse(JSON.stringify(avatarOptions))

    // 2. Eliminar la propiedad svg
    if (avatarToSave.shirt) {
      delete avatarToSave.shirt.svg
    }
    if (avatarToSave.hair) {
      delete avatarToSave.hair.svg
    }

    // 3. Guardar el objeto clonado en localStorage
    localStorage.setItem('avatarOptions', JSON.stringify(avatarToSave))
    alert.value.show()
  }

  return {
    skins,
    shirtsOptions,
    avatarOptions,
    skinsOptions,
    eyesColorsOptions,
    hairsOptions,
    svgBody,
    alert,
    changeShirt,
    saveChanges,
    changeSkin,
    changeEyeColor,
    changeHair,
  }
}

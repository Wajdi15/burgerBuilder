export const updatedObject = (oldObject,updatedValue) =>{
    return {
        ...oldObject,
        ...updatedValue
    }
};
export default updatedObject;
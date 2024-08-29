import bcrypt from "bcrypt"



  export  const hasshedPassword = async(password) => {
  try {
      const saltRounds = 10;
      const hashed = await bcrypt.hash(password, saltRounds)  
      return hashed

  } catch (error) {
    console.log(error);
    
  }


}

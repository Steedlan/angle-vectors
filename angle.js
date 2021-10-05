// replace the 3 number in the array
let v1 = [-17,-32,37] // vector 1
let v2 = [-17,-35,34] // vector2
//       Remember: [x,y,z] but z = y in maths

// Choose a mode /   true = based on norms / false = based on coordinates (it will create a second vector to find the angle)
// if false, the 3 objects in those arrays become the coordinates of those 2 points

if(mode == true) {

    let scalar = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]
    console.log("Scalar product " + scalar)

    let normv1 = Math.sqrt(v1[0]*v1[0] + v1[1] *v1[1] + v1[2]*v1[2])
    let normv2 = Math.sqrt(v2[0]*v2[0] + v2[1] *v2[1] + v2[2]*v2[2])
    console.log("Length of V1: " + normv1)
    console.log("Length of V2: " + normv2)

    let angle = normv1*normv2; angle = scalar / angle
    let result = Math.acos(angle) 
    console.log("Result in radiant: "+ result+ "\nResult in degree: " + result * (180/Math.PI))
    }

    else if(mode == false) {
        let v3 = [ v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]]
      let v4 =  [v3[0],v3[1],0]
console.log("The norm between these points are: " + v3)

        let scalar = v3[0] * v4[0] + v3[1] * v4[1] + v3[2] * v4[2]
        console.log("Scalar product " + scalar)

        let normv1 = Math.sqrt(v3[0]*v3[0] + v3[1] *v3[1] + v3[2]*v3[2])
        let normv2 = Math.sqrt(v4[0]*v4[0] + v4[1] *v4[1])
        console.log("Length of V1" + normv1)
        console.log("Length of V2" + normv2)
      
    let angle = normv1*normv2; angle = scalar / angle
    let result = Math.acos(angle) 
    console.log("Result in radiant: "+ result+ "\nResult in degree: " + result * (180/Math.PI))
        }

    

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { auth } from "./firebase"
import { Toaster, toast } from "sonner"
import { createUserWithEmailAndPassword } from "firebase/auth"
import NavMenu from "./NavMenu"
import Menu_Bar from "./Menu_Bar"
import DropDown from "./DropDown"
import Sheets from "./Sheets"


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      await createUserWithEmailAndPassword(auth, email, password)

      toast.success("Signup successful!", {
        description: `Welcome, ${name || "User"}!`,
      })

      setSuccess("Signup successful!")
    } catch (err) {
      toast.error("Signup failed", {
        description: err.message,
      })
      setError(err.message)
    }
  }

  return (
    <div >
     {/* <NavMenu/> */}
     <Menu_Bar/>
     <Sheets/>
     {/* <DropDown/> */}
      <Toaster richColors position="top-right" />
    <div className="w-full bg-gray-100 min-h-screen flex justify-center items-center p-4">
      


      <Card className="flex-col bg-white space-y-4 mx-3.5 py-6 px-10 w-full max-w-md">
        
       <h1 className="text-2xl font-semibold text-center">Sign up</h1>


        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              id="name"
              placeholder="e.g Edidiong Reuben"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g meandyou@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>

          {/* {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>} */}
        </form>
      </Card>
    </div>
    </div>
  )
}

export default App

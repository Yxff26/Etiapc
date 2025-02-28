"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Login Form */}
      <div className="flex w-full lg:w-1/2 flex-col px-6 sm:px-12 md:px-20 justify-center">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="NovaSyncer Logo" width={40} height={40} className="w-8 h-8" />
            <span className="text-xl font-semibold">NovaSyncer</span>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">Log in to your Account</h1>
            <p className="text-sm text-muted-foreground">Welcome back! Select method to log in:</p>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <Button variant="outline" className="w-full">
                <Image src="/placeholder.svg" alt="Google" width={20} height={20} className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">or continue with email</span>
              </div>
            </div>

            {/* Email & Password Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="/auth/forgot-password" className="text-sm font-medium text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center p-12">
        <div className="max-w-lg">
          <div className="relative w-full aspect-square">
            <Image
              src=""
              alt="Login illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Connect with every application.</h2>
            <p className="text-primary-foreground/80">Everything you need in an easily customizable dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


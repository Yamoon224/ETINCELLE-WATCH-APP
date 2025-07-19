"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, User, Bell, Coffee, Users, Settings } from "lucide-react"

export default function WatchApp() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [selectedTable, setSelectedTable] = useState<number | null>(null)

  const screens = ["welcome", "laetitia", "selectTable", "confirmTable", "validateTable", "success", "menu"]

  const tables = Array.from({ length: 25 }, (_, i) => i + 1)

  const menuItems = [
    { icon: User, label: "Appelé Client", color: "text-green-500" },
    { icon: Bell, label: "Demande facilitation", color: "text-green-500" },
    { icon: Coffee, label: "Demande facilitation", color: "text-red-500" },
    { icon: Users, label: "Demande facilitation", color: "text-red-500" },
    { icon: Settings, label: "Demande facilitation", color: "text-green-500" },
  ]

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    }
  }

  const goToScreen = (screenIndex: number) => {
    setCurrentScreen(screenIndex)
  }

  const selectTable = (tableNumber: number) => {
    setSelectedTable(tableNumber)
    nextScreen()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative">
        {/* Watch Frame */}
        <div className="w-80 h-80 bg-black rounded-[60px] p-4 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[45px] overflow-hidden relative">
            {/* Welcome Screen */}
            {currentScreen === 0 && (
              <div className="flex flex-col items-center justify-center h-full bg-white text-black p-6">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">BIENVENUE</h1>
                  <p className="text-sm text-gray-600">Cliquez sur le bouton pour commencer</p>
                </div>
                <Button
                  onClick={nextScreen}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Se Connecter
                </Button>
              </div>
            )}

            {/* Laetitia Screen */}
            {currentScreen === 1 && (
              <div className="flex flex-col items-center justify-center h-full bg-white text-black p-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">L</span>
                </div>
                <h2 className="text-xl font-bold text-purple-600 mb-4">Laetitia</h2>
                <p className="text-center text-sm text-gray-700 mb-6">Tu me donnes envie pour quelque chose</p>
                <Button onClick={nextScreen} variant="ghost" size="icon" className="text-red-500">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            )}

            {/* Select Table Screen */}
            {currentScreen === 2 && (
              <div className="h-full bg-black text-white p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <h2 className="text-sm font-bold">SELECT TABLE</h2>
                  <div className="text-xs">1:40</div>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-8">
                  {tables.map((table) => (
                    <button
                      key={table}
                      onClick={() => selectTable(table)}
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xs hover:bg-green-400 transition-colors"
                    >
                      {table}
                    </button>
                  ))}
                </div>
                <Button
                  onClick={nextScreen}
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-4 right-4 text-red-500"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            )}

            {/* Confirm Table Screen */}
            {currentScreen === 3 && (
              <div className="h-full bg-black text-white flex flex-col items-center justify-center p-6">
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="text-xs">1:40</div>
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-sm font-bold mb-2">TABLE</h2>
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">{selectedTable || 14}</span>
                  </div>
                  <p className="text-sm">Demande facilitation</p>
                </div>
                <Button
                  onClick={nextScreen}
                  className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded-full font-bold"
                >
                  OK
                </Button>
              </div>
            )}

            {/* Validate Table Screen */}
            {currentScreen === 4 && (
              <div className="h-full bg-black text-white flex flex-col items-center justify-center p-6">
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="text-xs">1:40</div>
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-sm font-bold mb-2">TABLE</h2>
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">{selectedTable || 8}</span>
                  </div>
                  <p className="text-sm">Demande facilitation</p>
                </div>
                <Button onClick={nextScreen} className="bg-white hover:bg-gray-100 text-black p-3 rounded-full">
                  <Check className="w-6 h-6" />
                </Button>
              </div>
            )}

            {/* Success Screen */}
            {currentScreen === 5 && (
              <div className="h-full bg-green-600 text-white flex flex-col items-center justify-center p-6">
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="text-xs">1:40</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                    <Check className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-lg font-bold mb-2">DEMANDE EFFECTUÉE</h2>
                  <p className="text-sm mb-2">Appelé Client</p>
                  <div className="bg-black bg-opacity-30 rounded-lg p-3 mt-4">
                    <p className="text-sm font-bold">TABLE</p>
                    <p className="text-2xl font-bold">{selectedTable || 14}</p>
                  </div>
                </div>
                <Button onClick={nextScreen} variant="ghost" className="mt-6 text-white">
                  Continuer
                </Button>
              </div>
            )}

            {/* Menu Screen */}
            {currentScreen === 6 && (
              <div className="h-full bg-black text-white p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <h2 className="text-sm font-bold">MENU</h2>
                  <div className="text-xs">1:40</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-red-500 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-red-500 text-xs font-bold">D</span>
                      </div>
                      <span className="text-sm font-medium">Demande facilitation</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${item.color === "text-green-500" ? "bg-green-500" : "bg-red-500"}`}
                        >
                          <item.icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToScreen(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentScreen === index ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Watch Band */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-800 rounded-t-xl"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-800 rounded-b-xl"></div>
      </div>
    </div>
  )
}

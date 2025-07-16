import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { AlertTriangle, Calculator, CheckCircle } from 'lucide-react';

// Import local images
import PrepareSolutionImage from '../assets/images/prepare-solution.webp';
import RunThroughLinesImage from '../assets/images/run-through-lines.webp';
import FlushWaterlinesImage from '../assets/images/flush-waterlines.webp';
import AddingTabletImage from '../assets/images/adding-tablet.webp';

const HowToUsePage = () => {
  const [bleachConcentration, setBleachConcentration] = useState('');
  const [calculatedRatio, setCalculatedRatio] = useState<string | null>(null);

  const calculateBleachRatio = () => {
    const concentration = parseFloat(bleachConcentration);
    if (concentration && concentration > 0) {
      // Formula to calculate parts water needed for 1 part bleach
      // Target concentration is approximately 0.5-1% for shocking
      const targetConcentration = 0.75; // 0.75% target
      const waterParts = Math.round((concentration / targetConcentration) - 1);
      setCalculatedRatio(`1 part bleach with ${waterParts} parts water`);
    }
  };

  const steps = [
    {
      number: 1,
      title: "Prepare Bleach Solution",
      image: PrepareSolutionImage,
      content: (
        <div className="space-y-4">
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800 font-semibold">
              Please Note: Do NOT use splash-free bleach.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>If using bleach with 5.25% - 6.25% sodium hypochlorite:</strong><br />
              Mix <strong>1 part bleach with 9 parts water.</strong>
            </p>
            <p className="text-gray-700">
              <strong>If using bleach with 7% - 8.25% sodium hypochlorite:</strong><br />
              Mix <strong>1 part bleach with 13 parts water.</strong>
            </p>
          </div>

          {/* Bleach Calculator */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Calculator className="w-5 h-5" />
                Bleach Concentration Calculator
              </CardTitle>
              <CardDescription>
                Using a different concentration? Calculate the correct ratio here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="concentration">Initial Concentration Percentage (e.g., 6.5 for 6.5%)</Label>
                <Input
                  id="concentration"
                  type="number"
                  min="0"
                  step="0.01"
                  value={bleachConcentration}
                  onChange={(e) => setBleachConcentration(e.target.value)}
                  placeholder="Enter concentration percentage"
                />
              </div>
              <Button onClick={calculateBleachRatio} className="w-full">
                Calculate Ratio
              </Button>
              {calculatedRatio && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 font-semibold">
                    Mix {calculatedRatio}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      number: 2,
      title: "Run Solution Through Waterlines",
      image: RunThroughLinesImage,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Allow the solution to sit in the waterlines for <strong>10 minutes</strong>.
          </p>
          <Alert className="border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              This contact time ensures proper disinfection of all surfaces within the waterline system.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      number: 3,
      title: "Flush Waterlines",
      image: FlushWaterlinesImage,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Rinse the waterlines thoroughly with warm water for <strong>2 minutes</strong>.
          </p>
          <Alert className="border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              Ensure all bleach solution is completely removed before proceeding to the next step.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      number: 4,
      title: "Check for Contamination",
      image: AddingTabletImage,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            If waterlines are heavily contaminated, repeat steps 1-3 until the water exiting the lines tests for <strong>0 CFU/ml</strong>, which confirms that the shocking process is complete.
          </p>
          <p className="text-gray-700 text-lg">
            LineTab is now ready to use! Simply add <strong>1 tablet per 0.7 liters</strong> of tap water in the system.
          </p>
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 font-semibold">
              Success! Your waterlines are now ready for LineTab maintenance.
            </AlertDescription>
          </Alert>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            HOW TO USE LINETAB
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To begin using LineTab, the system must first be shocked. Since LineTab works continuously 
            in the system to prevent the growth of microorganisms, we want to ensure that the system 
            starts at a baseline of 0 CFU/ml.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-600 mb-4 text-center">Initial Setup Process</h3>
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0 ? 'bg-blue-600' : 'bg-gray-400'
                }`}>
                  {step.number}
                </div>
                <span className="text-sm mt-2 text-center max-w-20">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, _index) => (
            <Card key={step.number} className="overflow-hidden shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8">
                    {step.content}
                  </div>
                  <div className="bg-gray-50 flex items-center justify-center p-8">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full max-w-md rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <Card className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">
              Why This Initial Setup is Important
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Complete Disinfection</h3>
                <p className="text-gray-600">Eliminates existing biofilm and microorganisms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Optimal Performance</h3>
                <p className="text-gray-600">Ensures LineTab can work at maximum effectiveness</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Long-term Protection</h3>
                <p className="text-gray-600">Creates the ideal foundation for continuous maintenance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Notice */}
        <Alert className="mt-12 border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Safety Reminder:</strong> Always follow your practice's safety protocols when handling bleach solutions. 
            Ensure proper ventilation and use appropriate personal protective equipment.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default HowToUsePage; 
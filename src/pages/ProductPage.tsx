import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Truck, Shield, Star, Clock } from 'lucide-react';

// Import local images
import ProductImage from '../assets/images/linetab-product-05.png';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerBottle = 35;
  const totalPrice = quantity * pricePerBottle;
  const freeShipping = totalPrice >= 100;

  const keyBenefits = [
    'EPA Approved Formula',
    '100 Tablets per Bottle',
    'Lasts 3-4 Months',
    'No Daily Maintenance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Product Image */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.img 
                  src={ProductImage}
                  alt="LineTab Waterline Maintenance Tablets" 
                  className="w-full max-w-lg drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute -top-4 -right-4">
                  <Badge className="bg-green-500 text-white px-3 py-1 text-sm font-semibold">
                    EPA Approved
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Title & Price */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  LineTab
                  <span className="block text-2xl lg:text-3xl font-normal text-gray-600">
                    Dental Waterline Tablets
                  </span>
                </h1>
                
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-blue-600">${pricePerBottle}</span>
                  <span className="text-xl text-gray-500">per bottle</span>
                </div>

                <div className="flex items-center gap-2">
                  {freeShipping ? (
                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1 px-3 py-1">
                      <Truck className="w-4 h-4" />
                      FREE SHIPPING
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      Free shipping over $100
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-gray-600">
                    100 tablets included
                  </Badge>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quantity & Purchase */}
              <Card className="border-2 border-blue-100 bg-blue-50/50">
                <CardContent className="p-6 space-y-6">
                  {/* Quantity Selector */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Quantity</label>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-12 px-4 hover:bg-gray-100"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                        >
                          −
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-16 h-12 text-center border-0 focus:ring-0 text-lg font-semibold"
                        />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-12 px-4 hover:bg-gray-100"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">${totalPrice}</div>
                        <div className="text-sm text-gray-500">Total</div>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 font-semibold shadow-lg"
                      onClick={() => window.location.href = `/checkout?quantity=${quantity}`}
                    >
                      Order Now - ${totalPrice}
                    </Button>
                  </motion.div>

                  {!freeShipping && totalPrice < 100 && (
                    <div className="text-center text-sm text-gray-600">
                      Add ${100 - totalPrice} more for free shipping
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-gray-700">EPA Approved</span>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Star className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-gray-700">Professional Grade</span>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-gray-700">Long Lasting</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Dental Professionals Choose LineTab
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Simple & Effective</h3>
                <p className="text-gray-600 text-sm">One tablet lasts 5-7 days. No daily maintenance required.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Regulatory Compliant</h3>
                <p className="text-gray-600 text-sm">EPA approved and meets all CDC waterline standards.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Cost Effective</h3>
                <p className="text-gray-600 text-sm">100 tablets provide months of waterline protection.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 
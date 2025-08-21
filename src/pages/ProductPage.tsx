import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Truck, Shield, Star, Clock } from 'lucide-react';

// Import local images
import ProductImage from '../assets/images/linetab-product-05.png';
import LogoSvg from '../assets/images/Logo.svg';

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
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            
            {/* Product Image */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.img 
                  src={ProductImage}
                  alt="LineTab Waterline Maintenance Tablets" 
                  className="w-full max-w-xs drop-shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Title & Price */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <img 
                    src={LogoSvg} 
                    alt="LineTab" 
                    className="h-6 lg:h-7"
                  />
                  <span className="block text-lg lg:text-xl font-normal text-gray-600">
                    Dental Waterline Tablets
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold" style={{ color: '#1C3960' }}>${pricePerBottle}</span>
                  <span className="text-lg text-gray-500">per bottle</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {freeShipping ? (
                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1 px-2 py-1 text-xs">
                      <Truck className="w-3 h-3" />
                      FREE SHIPPING
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-blue-600 border-blue-200 text-xs">
                      Free shipping over $100
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-gray-600 text-xs">
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
              <Card className="border border-blue-200 bg-blue-50/30">
                <CardContent className="p-4 space-y-4">
                  {/* Quantity Selector */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Quantity</label>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-10 px-3 hover:bg-gray-100"
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
                          className="w-14 h-10 text-center border-0 focus:ring-0 text-base font-semibold"
                        />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-10 px-3 hover:bg-gray-100"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">${totalPrice}</div>
                        <div className="text-xs text-gray-500">Total</div>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-4 font-semibold shadow-md"
                      onClick={() => window.location.href = `/checkout?quantity=${quantity}`}
                    >
                      Order Now - ${totalPrice}
                    </Button>
                  </motion.div>

                  {!freeShipping && totalPrice < 100 && (
                    <div className="text-center text-xs text-gray-600">
                      Add ${100 - totalPrice} more for free shipping
                    </div>
                  )}
                </CardContent>
              </Card>


            </motion.div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Dental Professionals Choose LineTab
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Simple & Effective</h3>
                <p className="text-gray-600 text-xs">One tablet lasts 5-7 days. No daily maintenance required.</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Regulatory Compliant</h3>
                <p className="text-gray-600 text-xs">EPA approved and meets all CDC waterline standards.</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Cost Effective</h3>
                <p className="text-gray-600 text-xs">100 tablets provide months of waterline protection.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 
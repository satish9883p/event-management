import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/common/Logo';

export const Register = () => {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    setLoading(true);

    try {
      await register(
        formData.name,
        formData.email,
        formData.password,
        formData.confirmPassword,
        formData.phone
      );
      navigate('/dashboard');
    } catch (error) {
      setErrors({ form: error.response?.data?.message || 'Registration failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-between">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            {/* Logo & Heading */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-3">
                <Logo size="lg" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Create Event Pro Account
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Book function halls and events with transparent pricing
              </p>
            </div>

            {errors.form && (
              <div className="mb-5 p-3.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-xl border border-red-200 dark:border-red-800">
                {errors.form}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="e.g. Satish Kumar"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="satish@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                required
              />

              <Input
                label="Password (min 6 characters)"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                required
              />

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                required
              />

              <Button
                type="submit"
                isLoading={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-bold shadow-md shadow-blue-500/20"
                size="lg"
              >
                Create Account &amp; Go to Dashboard
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline font-bold">
                Sign in here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;

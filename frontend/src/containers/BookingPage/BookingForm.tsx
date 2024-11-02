import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';

interface FileUpload {
  file: File;
  progress: number;
}
interface ErrorResponse {
  message: string;
  error?: any; // Adjust the type as needed based on the structure of your error object
}

interface UploadedFile {
  filename: string;
  mimetype: string;
}

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Call',
    company: '',
    serviceLocation: '',
    accessInstructions: '',
    scanType: 'Residential',
    preferredDate: '',
    backupDate: '',
    purpose: 'Real Estate',
    projectScope: '',
    numberOfRooms: [],
    outputFormats: [] as string[],
    additionalServices: [] as string[],
    completionDate: '',
    specialInstructions: '',
    budgetRange: 500,
    projectTimeline: 'Flexible',
    deliveryPreferences: [] as string[],
    termsAccepted: false,
    privacyConsent: false,
    showcaseConsent: false,
  });


  const [step, setStep] = useState(1);
  const [fileUploads, setFileUploads] = useState<FileUpload[]>([]);
  const [uploadedFilePaths, setUploadedFilePaths] = useState<string[]>([]); // Store file paths
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: FormDataKeys; value: string }; // Use FormDataKeys type for name

    if ((e.target as HTMLInputElement).type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: isChecked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };



  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(file => ({ file, progress: 0 }));
      setFileUploads(files);
    }
  };

  type FormDataKeys = keyof typeof formData;
  const handleMultiSelectChange = (name: FormDataKeys, value: string) => {
    setFormData(prev => {
      const selected = prev[name] as string[]; // Ensure `prev[name]` is treated as a string array
      return {
        ...prev,
        [name]: selected.includes(value) ? selected.filter(v => v !== value) : [...selected, value],
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const bookingResponse = await axios.post('/api/booking/create', formData);
      const bookingId = bookingResponse.data.bookingId;

      // Now save the uploaded files
      await axios.post('/api/files/save', { bookingId, files: uploadedFiles }); // Ensure uploadedFiles has filePath and fileType

      alert("Booking and files saved successfully");
      window.location.reload();
    } catch (error) {
      console.error("Booking error", error);
    }
  };



  const handleFileUpload = async () => {
    const formData = new FormData();
    fileUploads.forEach((fileUpload) => {
      // Explicitly specify the type of 'fileUpload.file'
      formData.append('files', fileUpload.file);
    });

    try {
      const response = await axios.post('/api/files/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const progress = Math.round((loaded * 100) / (total || 1));
          setFileUploads((prevFiles) =>
            prevFiles.map((file) => ({
              ...file,
              progress: progress,
            }))
          );
        },
      });

      // Make sure to define the expected response structure
      const fileDetails = response.data.files.map((file: UploadedFile, index: number) => ({
        filePath: `/uploads/${file.filename}`,
        fileType: file.mimetype,
      }));

      setUploadedFiles(fileDetails);
      alert(response.data.message);
    } catch (error) {
      console.error("File upload error", error);
    }
  };


  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="container mx-auto mb-24 lg:mb-32 p-5 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Registration Form</h2>
      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <div className="step-indicator text-center text-lg font-medium mb-6 text-gray-700">
          <p className="text-sm tracking-wide">Step {step} of 5</p>
        </div>
  
        {step === 1 && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="Call">Call</option>
              <option value="Text">Text</option>
            </select>
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Company/Organization Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full border border-gray-200 rounded-md p-3 mb-6 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
              type="button"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}
  
        {step === 2 && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Service Details</h3>
            <label className="block text-sm font-medium mb-2 text-gray-700">Service Location</label>
            <input
              type="text"
              name="serviceLocation"
              value={formData.serviceLocation}
              onChange={handleChange}
              required
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Access Instructions</label>
            <textarea
              name="accessInstructions"
              value={formData.accessInstructions}
              onChange={handleChange}
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Type of 3D Scan</label>
            <select
              name="scanType"
              value={formData.scanType}
              onChange={handleChange}
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Upload Files (max 15 MB each)</label>
            <input
              type="file"
              className="mt-1 block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              multiple
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleFileUpload}
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300 mb-6"
            >
              Upload
            </button>
  
            {fileUploads.map((fileUpload, idx) => (
              <div key={idx} className="mb-2">
                <p className="text-sm text-gray-600">{fileUpload.file.name} - {fileUpload.progress}%</p>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-green-500 rounded"
                    style={{ width: `${fileUpload.progress}%`, transition: 'width 0.5s ease-in-out' }}
                  ></div>
                </div>
              </div>
            ))}
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Preferred Date/Time</label>
            <input
              type="datetime-local"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="block w-full border border-gray-200 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
  
            <label className="block text-sm font-medium mb-2 text-gray-700">Backup Date/Time</label>
            <input
              type="datetime-local"
              name="backupDate"
              value={formData.backupDate}
              onChange={handleChange}
              className="block w-full border border-gray-200 rounded-md p-3 mb-6 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
              type="button"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}
  
        {/* Steps 3, 4, and 5 would follow a similar styling pattern with these adjustments */}
  
        {step > 1 && (
          <button
            className="w-full bg-gray-400 text-white font-semibold py-3 rounded-md hover:bg-gray-500 transition duration-300 mt-6"
            type="button"
            onClick={prevStep}
          >
            Previous
          </button>
        )}
      </form>
    </div>
  );
  
};

export default BookingPage;


import React from 'react';
import { CardProfileForm } from '@/app/_components/CardProfileForm'; 

// These interfaces should be in their respective component files
// They're shown here just for reference
// interface CardProfilePageProps {
//   onCreateClick: () => void;
// }
// interface CardProfileFormProps {
//   onBack: () => void;
// }

const CreateProfilePage = () => {
  
 
  return (
    <section className="flex-1 overflow-auto">
    <CardProfileForm />
    </section>
  );
};

export default CreateProfilePage;
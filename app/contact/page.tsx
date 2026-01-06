import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] pt-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#F8F9FA] mb-4">Contact Us</h1>
          <p className="text-xl text-[#BDC3C7] mb-12">ติดต่อเรา</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#BDC3C7]/20">
              <h3 className="text-2xl font-bold text-[#F8F9FA] mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[#BDC3C7] mb-1">Phone</p>
                  <p className="text-[#F8F9FA] font-semibold">+66 XX XXX XXXX</p>
                </div>
                
                <div>
                  <p className="text-[#BDC3C7] mb-1">Email</p>
                  <p className="text-[#F8F9FA] font-semibold">info@louiepattaya.com</p>
                </div>
                
                <div>
                  <p className="text-[#BDC3C7] mb-1">Line</p>
                  <p className="text-[#F8F9FA] font-semibold">@louiepattaya</p>
                </div>
                
                <div>
                  <p className="text-[#BDC3C7] mb-1">Location</p>
                  <p className="text-[#F8F9FA] font-semibold">Pattaya, Thailand</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#BDC3C7]/20">
              <h3 className="text-2xl font-bold text-[#F8F9FA] mb-6">Business Hours</h3>
              <div className="space-y-2 text-[#BDC3C7]">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

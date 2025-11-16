import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, Enrollment } from '../lib/supabase';
import { LogOut, Trash2, CheckCircle, Search, Download } from 'lucide-react';

export function AdminDashboard() {
  const { logout } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnrollments(data || []);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteEnrollment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enrollment?')) return;

    try {
      const { error } = await supabase
        .from('enrollments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setEnrollments(enrollments.filter((e) => e.id !== id));
    } catch (error) {
      console.error('Error deleting enrollment:', error);
      alert('Failed to delete enrollment');
    }
  };

  const toggleReviewed = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({ reviewed: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      setEnrollments(
        enrollments.map((e) =>
          e.id === id ? { ...e, reviewed: !currentStatus } : e
        )
      );
    } catch (error) {
      console.error('Error updating enrollment:', error);
      alert('Failed to update enrollment');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'WhatsApp', 'Course', 'Message', 'Reviewed', 'Submitted Date'];
    const rows = filteredEnrollments.map((e) => [
      e.name,
      e.email,
      e.whatsapp,
      e.course,
      e.message,
      e.reviewed ? 'Yes' : 'No',
      new Date(e.created_at).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enrollments-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredEnrollments = enrollments.filter(
    (e) =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.whatsapp.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-emerald-900">Admin Dashboard</h1>
              <p className="text-gray-600 text-sm">Minhaj Institution - Enrollment Management</p>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, email, course, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          <div className="mb-4 flex gap-4 text-sm">
            <span className="text-gray-600">
              Total: <span className="font-bold text-emerald-900">{enrollments.length}</span>
            </span>
            <span className="text-gray-600">
              Reviewed: <span className="font-bold text-emerald-900">{enrollments.filter(e => e.reviewed).length}</span>
            </span>
            <span className="text-gray-600">
              Pending: <span className="font-bold text-amber-600">{enrollments.filter(e => !e.reviewed).length}</span>
            </span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            <p className="mt-4 text-gray-600">Loading enrollments...</p>
          </div>
        ) : filteredEnrollments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-600">
              {searchTerm ? 'No enrollments found matching your search.' : 'No enrollments yet.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEnrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 ${
                  enrollment.reviewed ? 'border-emerald-500' : 'border-amber-500'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-emerald-900 mb-1">
                          {enrollment.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {new Date(enrollment.created_at).toLocaleString('en-US', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          enrollment.reviewed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {enrollment.reviewed ? 'Reviewed' : 'Pending'}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Email:</span>{' '}
                        <a
                          href={`mailto:${enrollment.email}`}
                          className="text-emerald-600 hover:underline"
                        >
                          {enrollment.email}
                        </a>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">WhatsApp:</span>{' '}
                        <a
                          href={`https://wa.me/${enrollment.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          {enrollment.whatsapp}
                        </a>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="font-semibold text-gray-700">Course:</span>{' '}
                        <span className="text-gray-900">{enrollment.course}</span>
                      </div>
                    </div>

                    {enrollment.message && (
                      <div className="pt-2 border-t border-gray-200">
                        <p className="font-semibold text-gray-700 text-sm mb-1">Message:</p>
                        <p className="text-gray-600 text-sm">{enrollment.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex lg:flex-col gap-2">
                    <button
                      onClick={() => toggleReviewed(enrollment.id, enrollment.reviewed)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        enrollment.reviewed
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4" />
                      {enrollment.reviewed ? 'Unmark' : 'Mark Reviewed'}
                    </button>
                    <button
                      onClick={() => deleteEnrollment(enrollment.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

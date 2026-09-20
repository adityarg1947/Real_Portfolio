import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Server, Database, Activity, CheckCircle } from 'lucide-react';

export const CloudSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<'alb' | 'ec2' | 'rds' | 'route53'>('alb');

  const nodeDetails = {
    alb: {
      title: 'Application Load Balancer (ALB)',
      description: 'Distributes incoming HTTP/HTTPS traffic evenly across EC2 target groups in multiple availability zones. Features health checks, SSL termination, and path-based routing.',
      badge: 'High Availability',
      color: 'text-sky-400',
    },
    ec2: {
      title: 'EC2 Auto Scaling Group',
      description: 'Dynamically scales application server capacity based on CPU and memory metrics. Ensures zero downtime during traffic spikes.',
      badge: 'Auto-Scaling',
      color: 'text-emerald-400',
    },
    rds: {
      title: 'Amazon RDS Multi-AZ & S3',
      description: 'Managed relational database with automated multi-region replication and object storage for scalable static asset delivery.',
      badge: 'Data Integrity',
      color: 'text-amber-400',
    },
    route53: {
      title: 'Amazon Route 53 DNS',
      description: 'Highly available global Domain Name System routing domain requests to load balancers with health check failovers.',
      badge: 'Global Routing',
      color: 'text-purple-400',
    },
  };

  return (
    <section id="cloud" className="py-20 bg-[#0b0f17]/80 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          badge="Infrastructure View"
          title="Cloud Engineering"
          subtitle="From local development to global infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 2D Conceptual Architecture Blueprint */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#101522] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="text-right mb-4">
                <span className="font-hand text-amber-300 text-lg">
                  "Architecture concepts I am learning and building toward."
                </span>
              </div>

              {/* Architecture Blueprint Diagram */}
              <div className="blueprint-grid border border-sky-500/30 bg-[#07090e]/90 rounded-2xl p-6 relative overflow-hidden">
                <div className="space-y-4">
                  {/* Row 1: Users & Route 53 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="px-3.5 py-2 bg-[#161c2c] border border-sky-400/40 rounded-lg text-center text-xs font-mono text-sky-200 shadow">
                      Users
                    </div>
                    <div className="flex-1 border-t border-dashed border-sky-400/40 mx-2 relative">
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] text-sky-400 bg-[#07090e] px-1 font-mono">
                        HTTPS
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedNode('route53')}
                      className={`px-3.5 py-2 rounded-lg text-center text-xs font-mono transition-all ${
                        selectedNode === 'route53'
                          ? 'bg-purple-500/20 border-2 border-purple-400 text-purple-200 shadow-lg'
                          : 'bg-[#161c2c] border border-sky-400/40 text-sky-200 hover:border-purple-400'
                      }`}
                    >
                      DNS / Route 53
                    </button>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-6 bg-sky-400/40"></div>
                  </div>

                  {/* Row 2: Load Balancer */}
                  <button
                    onClick={() => setSelectedNode('alb')}
                    className={`w-full p-3.5 rounded-xl text-center transition-all ${
                      selectedNode === 'alb'
                        ? 'bg-sky-950/70 border-2 border-sky-400 text-sky-200 shadow-xl'
                        : 'bg-sky-950/40 border border-sky-400/60 text-sky-300 hover:border-sky-300'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold block mb-0.5">
                      Load Balancer (ALB)
                    </span>
                    <p className="text-[11px] text-slate-400">Traffic distribution & health monitoring</p>
                  </button>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-6 bg-sky-400/40"></div>
                  </div>

                  {/* Row 3: App Servers & Databases */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedNode('ec2')}
                      className={`p-3.5 rounded-xl text-center transition-all ${
                        selectedNode === 'ec2'
                          ? 'bg-emerald-950/70 border-2 border-emerald-400 text-emerald-200 shadow-xl'
                          : 'bg-[#161c2c] border border-slate-700 hover:border-emerald-400'
                      }`}
                    >
                      <Server className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <span className="text-xs font-mono text-emerald-300 block font-semibold">
                        App Servers
                      </span>
                      <span className="text-[10px] text-slate-400">EC2 Auto Scaling</span>
                    </button>

                    <button
                      onClick={() => setSelectedNode('rds')}
                      className={`p-3.5 rounded-xl text-center transition-all ${
                        selectedNode === 'rds'
                          ? 'bg-amber-950/70 border-2 border-amber-400 text-amber-200 shadow-xl'
                          : 'bg-[#161c2c] border border-slate-700 hover:border-amber-400'
                      }`}
                    >
                      <Database className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <span className="text-xs font-mono text-amber-300 block font-semibold">
                        Database & Storage
                      </span>
                      <span className="text-[10px] text-slate-400">RDS Multi-AZ & S3</span>
                    </button>
                  </div>
                </div>

                {/* Blueprint Footer */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>VPC Isolation</span>
                  <span>CI/CD Integration</span>
                  <span>CloudWatch Logs</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Designing for high availability, fault tolerance, and operational simplicity.</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Node Inspector Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#101522] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" /> Component Inspector
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {nodeDetails[selectedNode].badge}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedNode}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className={`text-xl font-bold font-heading ${nodeDetails[selectedNode].color}`}>
                    {nodeDetails[selectedNode].title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {nodeDetails[selectedNode].description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Zero single point of failure design</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Encrypted communication & VPC subnets</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Continuous health check monitoring</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Click diagram nodes to inspect</span>
              <span className="text-amber-300 font-hand text-base">"Cloud Blueprint"</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

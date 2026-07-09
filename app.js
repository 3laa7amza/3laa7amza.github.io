/**
 * Dynamic Global Portfolio Application State Handler
 * Controlled via Alpine.js orchestration context
 */
function portfolioState() {
    return {
        lang: 'en',
        mobileMenuOpen: false,
        activeTab: 'all',
        cvModalOpen: false,

        /**
         * Project Status Configuration
         */
        statusConfig: {
            progress: {
                text: { en: 'In Progress', ar: 'قيد التطوير' },
                dot: 'bg-yellow-500',
                textClass: 'text-yellow-400'
            },
            review: {
                text: { en: 'Waiting for Review', ar: 'بانتظار مراجعة العميل' },
                dot: 'bg-red-500',
                textClass: 'text-red-400'
            },
            completed: {
                text: { en: 'Completed', ar: 'مكتمل' },
                dot: 'bg-emerald-500',
                textClass: 'text-emerald-400'
            }
        },

        /**
         * Dynamic Projects Repository
         */
        projects: [
            // Company Dashboard
            {
                id: 'company-starter-cms',
                category: 'private',
                status: 'completed',
                url: 'https://demoyoursite.xyz/alaa/dashboard_v9/public/en',
                imgSource: 'images/dashboard.jpg',
                title: {
                    en: 'Developed Company Starter / CMS (Internal System)',
                    ar: 'تطوير المشروع الأساسي للشركة / CMS (نظام داخلي)',
                },
                tags: ['Laravel', 'Localization', 'MySql', 'CSS', 'JS', 'GSAP', 'Bootstrap', 'WOW'],
                badge: {
                    en: 'Company Starter',
                    ar: 'المشروع الأساسي للشركة'
                }
            },

            // AQL
            {
                id: 'aql-data-system',
                category: 'companies',
                status: 'completed',
                url: 'https://www.aqldata.com/en',
                imgSource: 'images/aql.jpg',
                title: {
                    en: 'AQL DATA',
                    ar: 'AQL DATA',
                },
                tags: ['Laravel', 'Localization', 'MySql', 'CSS', 'JS', 'GSAP', 'Bootstrap', 'WOW'],
                badge: {
                    en: 'Software Distributor',
                    ar: 'موزع برمجيات'
                }
            },

            // Naseej
            {
                id: 'naseej-textile-system',
                category: 'companies',
                status: 'completed',
                url: 'https://www.naseejtextile.com/en',
                imgSource: 'images/naseej.jpg',
                title: {
                    en: 'Naseej Textile Company',
                    ar: 'شركة نسيج للمنسوجات',
                },
                tags: ['Laravel', 'Localization', 'MySql', 'CSS', 'JS', 'GSAP', 'Bootstrap', 'WOW'],
                badge: {
                    en: 'Textile & Clothes',
                    ar: 'المنسوجات والملابس'
                }
            },

            // Dar Metal Industries
            {
                id: 'dar-metal-industries',
                category: 'companies',
                status: 'completed',
                url: 'https://darmetal.com.sa/en',
                imgSource: 'images/darmetal.jpg',
                title: {
                    en: 'Dar Metal Industries',
                    ar: 'دار المعدن للصناعات',
                },
                tags: ['Laravel', 'Localization', 'MySql', 'CSS', 'JS', 'GSAP', 'Bootstrap', 'WOW'],
                badge: {
                    en: 'Construction & Manufacturing Company',
                    ar: 'شركة مقاولات وتصنيع',
                }
            },

            // GCRE
            {
                id: 'gcre-real-estate',
                category: 'personal',
                status: 'completed',
                url: 'https://gcre.city/en',
                imgSource: 'images/gcre.jpg',
                title: {
                    en: 'GCRE',
                    ar: 'GCRE'
                },
                tags: ['Laravel Blade', 'Localization', 'MySql', 'CSS', 'JS', 'GSAP', 'Bootstrap'],
                badge: {
                    en: 'Real Estate Management',
                    ar: 'إدارة عقارات'
                }
            },

            // Falcon Cloud
            {
                id: 'falcon-cloud-networking',
                category: 'companies',
                status: 'review',
                url: 'https://demoyoursite.xyz/alaa/falcon-cloud-new/public/en',
                imgSource: 'images/falcon.jpg',
                title: {
                    en: 'Falcon Cloud',
                    ar: 'فالكون كلاود'
                },
                tags: ['Laravel Blade', 'Localization', 'MySql', 'CSS', 'JS', 'GSAP', 'Bootstrap'],
                badge: {
                    en: 'IT & Networking Solutions',
                    ar: 'حلول تقنية المعلومات والشبكات'
                }
            }
        ],

        /**
         * Safely flips localization language attributes and components
         */
        toggleLang() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';

    // Let Alpine finish updating the DOM 'dir' attribute, then re-init Swiper
    this.$nextTick(() => {
        if (window.skillsSwiper && typeof window.skillsSwiper.destroy === 'function') {
            window.skillsSwiper.destroy(true, true);
        }

        const isRtl = this.lang === 'ar';
        window.skillsSwiper = new Swiper('.skills-swiper', {
            slidesPerView: 2,
            spaceBetween: 24,
            grabCursor: true,
            loop: true,
            speed: 4000,
            rtl: isRtl,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
            }
        });
    });
}
    };
}

/* Swiper Initialization Context */
document.addEventListener('DOMContentLoaded', function () {
    // Detect layout direction from the HTML tag directly on load
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    window.skillsSwiper = new Swiper('.skills-swiper', {
        slidesPerView: 2,
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        speed: 4000,
        rtl: isRtl,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });
});

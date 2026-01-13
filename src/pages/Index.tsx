import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plane, Palmtree, Heart, UtensilsCrossed, Mountain, Waves, Ship, Users, Clock, Shield, Star, MessageCircle, ChevronDown, MapPin, Sparkles, CheckCircle2, Phone, Mail, Menu, X } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';
import aboutPhoto from '@/assets/about-photo.jpg';
import honeymoonImage from '@/assets/honeymoon.jpg';
import beachResortImage from "@/assets/beach-resort.jpg";
import gastroTourImage from "@/assets/gastro-tour.jpg";
import safariImage from "@/assets/safari.jpg";
import skiResortImage from "@/assets/ski-resort.jpg";
import spaRetreatImage from "@/assets/spa-retreat.jpg";
import yachtCruiseImage from "@/assets/yacht-cruise.jpg";
import corporateTravelImage from "@/assets/corporate-travel.jpg";
import maldivesImage from "@/assets/maldives.jpg";
import dubaiImage from "@/assets/dubai.jpg";
import europeImage from "@/assets/europe.jpg";
import japanImage from "@/assets/japan.jpg";
import seychellesImage from "@/assets/seychelles.jpg";
import turkeyImage from "@/assets/turkey.jpg";
import chinaImage from "@/assets/china.jpg";
import russiaImage from "@/assets/russia.jpg";
const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredContact: 'whatsapp',
    destination: '',
    when: '',
    wishes: '',
    consent: false
  });
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif font-bold text-primary">Travel Avenue</div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 transition-colors text-foreground hover:text-primary" aria-label="Меню">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('formats')} className="text-sm hover:text-primary transition-colors">
                Форматы
              </button>
              <button onClick={() => scrollToSection('geography')} className="text-sm hover:text-primary transition-colors">
                География
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">
                Отзывы
              </button>
              <Button onClick={() => scrollToSection('contact')} variant="default">
                Оставить заявку
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation - Right-aligned dropdown */}
          <div className={`md:hidden absolute top-full right-4 mt-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className="flex flex-col gap-1 py-3 bg-foreground/80 backdrop-blur-xl rounded-2xl px-2 min-w-[200px] shadow-2xl border border-white/10">
              <button onClick={() => scrollToSection('formats')} className="text-left py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                Форматы
              </button>
              <button onClick={() => scrollToSection('geography')} className="text-left py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                География
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                О нас
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                Отзывы
              </button>
              <div className="px-2 pt-2">
                <Button onClick={() => scrollToSection('contact')} variant="default" className="w-full">
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center md:bg-center" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center right'
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/60 via-foreground/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
              Премиальные путешествия под ключ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">Создаём персональные маршруты в любой точке мира — от уединённых вилл на океане до насыщенных гастро-туров. Заботимся о каждом шаге поездки, чтобы вы отдыхали, а не решали вопросы.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-lg px-8">
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {['40+ стран', '24/7 на связи', 'Индивидуальные маршруты', 'Конфиденциальность'].map(badge => <div key={badge} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  {badge}
                </div>)}
            </div>
          </div>
        </div>
        
        <button onClick={() => scrollToSection('for-whom')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Для кого это
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Создаём путешествия для тех, кто ценит своё время и комфорт
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Users,
            title: 'Предприниматели и руководители',
            desc: 'Спокойный отдых с продуманными деталями, где всё организовано идеально'
          }, {
            icon: Heart,
            title: 'Пары и молодожёны',
            desc: 'Романтические маршруты и незабываемые моменты в самых красивых местах мира'
          }, {
            icon: Users,
            title: 'Семьи с детьми',
            desc: 'Комфортные и безопасные путешествия с учётом потребностей каждого члена семьи'
          }, {
            icon: Sparkles,
            title: 'Компании друзей',
            desc: 'Насыщенные активностями приключения или расслабленный отдых в уникальных локациях'
          }].map((item, i) => <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Travel Formats Section */}
      <section id="formats" className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Форматы путешествий
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            От спокойного пляжного отдыха до экстремальных экспедиций
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            image: beachResortImage,
            title: 'Пляжный отдых',
            desc: 'Лучшие курорты и частные пляжи'
          }, {
            image: honeymoonImage,
            title: 'Медовый месяц',
            desc: 'Романтика в райских уголках мира'
          }, {
            image: gastroTourImage,
            title: 'Гастрономические туры',
            desc: 'Кулинарные открытия и Мишлен'
          }, {
            image: safariImage,
            title: 'Сафари и экспедиции',
            desc: 'Приключения в дикой природе'
          }, {
            image: skiResortImage,
            title: 'Горнолыжные курорты',
            desc: 'Премиальные склоны и шале'
          }, {
            image: spaRetreatImage,
            title: 'Ретриты и SPA',
            desc: 'Перезагрузка и wellness'
          }, {
            image: yachtCruiseImage,
            title: 'Яхты и круизы',
            desc: 'Морские путешествия класса люкс'
          }, {
            image: corporateTravelImage,
            title: 'Корпоративные поездки',
            desc: 'Incentive-туры для команд'
          }].map((format, i) => <Card key={i} className="group hover:shadow-lg hover:scale-105 transition-all cursor-pointer overflow-hidden border-0">
                <div className="relative h-40 overflow-hidden">
                  <img src={format.image} alt={format.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="pt-4 text-center">
                  <h3 className="text-lg font-serif font-semibold mb-2">{format.title}</h3>
                  <p className="text-sm text-muted-foreground">{format.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Полный спектр услуг для комфортного путешествия
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[{
            icon: Plane,
            title: 'Авиабилеты'
          }, {
            icon: Ship,
            title: 'Трансферы'
          }, {
            icon: Palmtree,
            title: 'Организация путешествий'
          }, {
            icon: Users,
            title: 'Корпоративные поездки'
          }, {
            icon: Clock,
            title: 'Сервис 24/7'
          }, {
            icon: Shield,
            title: 'Визовая поддержка'
          }].map((service, i) => <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{service.title}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Куда мы организуем путешествия</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">Работаем с лучшими направлениями по всему миру</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            region: 'Мальдивы',
            desc: 'Виллы на воде, идеальный медовый месяц',
            image: maldivesImage
          }, {
            region: 'ОАЭ',
            desc: 'Роскошь Дубая, пустынные приключения',
            image: dubaiImage
          }, {
            region: 'Европа',
            desc: 'Культурные маршруты, гастрономия, шопинг',
            image: europeImage
          }, {
            region: 'Япония',
            desc: 'Гастрономия, культура, городские маршруты',
            image: japanImage
          }, {
            region: 'Сейшелы',
            desc: 'Уединённые острова, дикая природа',
            image: seychellesImage
          }, {
            region: 'Африка',
            desc: 'Сафари, океан, экзотика',
            image: safariImage
          }, {
            region: 'Турция',
            desc: 'Классика и эксклюзивные туры',
            image: turkeyImage
          }, {
            region: 'Китай',
            desc: 'Бизнес, экскурсии, отдых',
            image: chinaImage
          }, {
            region: 'Россия',
            desc: 'Бизнес-поездки и премиальный отдых',
            image: russiaImage
          }].map((dest, i) => <Card key={i} className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={dest.image} alt={dest.region} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h3 className="text-xl font-serif font-semibold text-white">{dest.region}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{dest.desc}</p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Почему с нами удобно</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">Берём на себя все заботы, чтобы вы наслаждались отдыхом</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
            icon: Clock,
            title: 'Экономия времени',
            desc: 'Беру на себя все задачи от подбора отеля до трансферов'
          }, {
            icon: Star,
            title: 'Индивидуальный подход',
            desc: 'Маршруты под ваш стиль жизни, а не по шаблону'
          }, {
            icon: CheckCircle2,
            title: 'Проверенное качество',
            desc: 'Только партнёры и отели с безупречной репутацией'
          }, {
            icon: MessageCircle,
            title: 'Сопровождение 24/7',
            desc: 'На связи на протяжении всей поездки'
          }, {
            icon: Shield,
            title: 'Конфиденциальность',
            desc: 'Полная безопасность ваших данных и запросов'
          }, {
            icon: Sparkles,
            title: 'Продуманные детали',
            desc: 'Рестораны, билеты, активности, special requests'
          }].map((benefit, i) => <div key={i} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Как проходит работа
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Простой и понятный процесс от заявки до возвращения домой
          </p>
          
          <div className="max-w-4xl mx-auto">
            {[{
            num: '01',
            title: 'Заявка',
            desc: 'Вы заполняете короткую форму или пишете в мессенджер'
          }, {
            num: '02',
            title: 'Звонок / бриф',
            desc: 'Обсуждаем пожелания, бюджет, даты, формат отдыха'
          }, {
            num: '03',
            title: 'Концепция',
            desc: 'Предлагаю варианты маршрутов и отелей'
          }, {
            num: '04',
            title: 'Организация',
            desc: 'Бронирования, перелёты, трансферы, доп. сервисы'
          }, {
            num: '05',
            title: 'Сопровождение',
            desc: 'Остаюсь с вами на связи до возвращения домой'
          }].map((step, i) => <div key={i} className="flex gap-6 mb-12 last:mb-0">
                <div className="shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Кейсы путешествий
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Примеры организованных поездок
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            destination: 'Италия, 10 дней',
            format: 'Семейное путешествие',
            budget: 'Premium',
            details: ['Частная вилла в Тоскане с панорамным видом', 'Экскурсии по винодельням с дегустациями', 'Кулинарные мастер-классы от шеф-повара', 'Трансферы на премиум-авто с водителем', 'Столики в мишленовских ресторанах']
          }, {
            destination: 'Мальдивы, 7 дней',
            format: 'Медовый месяц',
            budget: 'Luxury',
            details: ['Вилла на воде с частным бассейном', 'Романтический ужин на закате на яхте', 'SPA-процедуры для двоих', 'Подводная фотосессия', 'Трансфер на гидросамолёте']
          }, {
            destination: 'Япония, 14 дней',
            format: 'Гастрономический тур',
            budget: 'Premium',
            details: ['Токио, Киото, Осака: лучшие рестораны', 'Участие в чайной церемонии', 'Визит на рыбный рынок Цукидзи', 'Ночёвка в традиционном рёкане', 'JR Pass первого класса']
          }].map((caseItem, i) => <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold mb-2">{caseItem.destination}</h3>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{caseItem.format}</span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{caseItem.budget}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {caseItem.details.map((detail, j) => <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Что говорят те, кто уже путешествовал со мной
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            name: 'Анна М.',
            trip: 'Мальдивы',
            text: 'Это был наш идеальный медовый месяц! Каждая деталь была продумана до мелочей. Особенно запомнился романтический ужин на закате, который был организован как сюрприз. Спасибо за заботу и внимание!'
          }, {
            name: 'Дмитрий К.',
            trip: 'Италия',
            text: 'Впервые путешествовал с полным сопровождением. Это невероятное ощущение — просто наслаждаться отдыхом, зная, что все вопросы решаются за тебя. Винные туры в Тоскане были выше всяких похвал!'
          }, {
            name: 'Елена и Сергей',
            trip: 'Япония',
            text: 'Организация путешествия была безупречной. Все рестораны, отели, маршруты — всё подобрано идеально под наши интересы. Особенно ценим, что всегда можно было связаться и что-то скорректировать.'
          }].map((review, i) => <Card key={i} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.trip}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
                <img src={aboutPhoto} alt="Travel Expert" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">О нас</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>Я Ирина Сиделева - основатель и владелец компании Тревел Авеню. За 12+ лет в индустрии премиального туризма мы организовали тысячи путешествий в 40+ странах мира. Моя философия проста: каждая поездка должна быть уникальной и безупречной.</p>
                  <p>Мы не работаем по шаблонам. Вместо этого мы внимательно слушаем, что важно именно для вас, и создаем маршрут, который идеально подходит под ваш стиль жизни и ожидания.</p>
                  <p>Наш фокус — премиальные путешествия, где важна каждая деталь. От выбора отеля до бронирования столика в ресторане с мишленовской звездой — мы позаботимся обо всём.

Тревел Авеню - это команда профессиональных тревел-консьержей, которые создают для Вас идеальные путешествия.
                </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">40+</div>
                    <div className="text-sm text-muted-foreground">стран</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">10000+</div>
                    <div className="text-sm text-muted-foreground">поездок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Ответы на вопросы, которые чаще всего задают
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[{
            q: 'Как строится работа и оплата?',
            a: 'После согласования концепции путешествия я выставляю счёт на организацию. Оплата происходит в два этапа: 50% при бронировании и 50% за 30 дней до поездки. Все расходы прозрачны и обсуждаются заранее.'
          }, {
            q: 'С какими бюджетами вы работаете?',
            a: 'Я специализируюсь на премиальных путешествиях. Минимальный бюджет зависит от направления и формата, но обычно начинается от 5000€ на человека за недельную поездку.'
          }, {
            q: 'Можно ли учесть особые запросы?',
            a: 'Конечно! Я работаю с особенностями питания, медицинскими требованиями, путешествиями с детьми и любыми другими запросами. Индивидуальный подход — основа моей работы.'
          }, {
            q: 'Вы работаете только с индивидуальными или и с группами?',
            a: 'Я организую как индивидуальные поездки, так и групповые — семейные путешествия, корпоративные выезды, incentive-туры для компаний до 20 человек.'
          }, {
            q: 'Что делать, если во время поездки что-то пойдёт не по плану?',
            a: 'Я на связи 24/7 на протяжении всей поездки. Любая ситуация решается оперативно — у меня есть проверенные партнёры в каждом направлении, которые помогут в любой момент.'
          }].map((faq, i) => <Card key={i}>
                
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Готовы к следующему путешествию?
            </h2>
            <p className="text-lg text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в течение 24 часов, чтобы обсудить детали вашего идеального отдыха</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Как к вам обращаться?" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Номер телефона</label>
                  <Input placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={e => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length > 0) {
                    if (value[0] === '8') value = '7' + value.slice(1);
                    if (value[0] !== '7') value = '7' + value;
                  }
                  if (value.length > 11) value = value.slice(0, 11);
                  let formatted = '';
                  if (value.length > 0) formatted = '+' + value[0];
                  if (value.length > 1) formatted += ' (' + value.slice(1, 4);
                  if (value.length > 4) formatted += ') ' + value.slice(4, 7);
                  if (value.length > 7) formatted += '-' + value.slice(7, 9);
                  if (value.length > 9) formatted += '-' + value.slice(9, 11);
                  setFormData({
                    ...formData,
                    phone: formatted
                  });
                }} required className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Где вам удобнее общаться?</label>
                  <RadioGroup value={formData.preferredContact} onValueChange={value => setFormData({
                  ...formData,
                  preferredContact: value
                })} className="flex flex-wrap gap-3">
                    <div className="flex items-center">
                      <RadioGroupItem value="call" id="call" className="sr-only peer" />
                      <Label htmlFor="call" className="px-4 py-2 rounded-full border cursor-pointer transition-all peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary hover:bg-muted">
                        Звонок
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="whatsapp" id="whatsapp" className="sr-only peer" />
                      <Label htmlFor="whatsapp" className="px-4 py-2 rounded-full border cursor-pointer transition-all peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary hover:bg-muted">
                        WhatsApp
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="telegram" id="telegram" className="sr-only peer" />
                      <Label htmlFor="telegram" className="px-4 py-2 rounded-full border cursor-pointer transition-all peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary hover:bg-muted">
                        Telegram
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Куда хотите поехать?</label>
                  <Input placeholder="Страна, город или направление" value={formData.destination} onChange={e => setFormData({
                  ...formData,
                  destination: e.target.value
                })} className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Когда планируете отдых?</label>
                  <Input placeholder="Месяц или конкретные даты" value={formData.when} onChange={e => setFormData({
                  ...formData,
                  when: e.target.value
                })} className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Пожелания к поездке</label>
                  <Textarea placeholder="Например: пляжный отдых, двое взрослых, бюджет до..., нужен тихий отель" value={formData.wishes} onChange={e => setFormData({
                  ...formData,
                  wishes: e.target.value
                })} rows={4} />
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox id="consent" checked={formData.consent} onCheckedChange={checked => setFormData({
                  ...formData,
                  consent: checked as boolean
                })} />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    Я согласен(а) на обработку персональных данных и получение информации о путешествиях
                  </label>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Travel Avenue</h3>
              <p className="text-background/80 leading-relaxed">
                Создаю премиальные путешествия под ключ с заботой о каждой детали
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+7 911 926 9863</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>TravelAvenue@yandex.ru</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://wa.me/79119269863" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a href="https://t.me/irina_travel_avenue" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            © 2025 Travel Avenue. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Floating Messenger Button */}
      <a href="https://t.me/Irasideleva_travel_expert" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>;
};
export default Index;
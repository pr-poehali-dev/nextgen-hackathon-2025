import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-15T23:59:59').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const tracks = [
    {
      id: 'scratch',
      title: 'Scratch',
      age: '8-10 лет',
      description: 'Создание собственной игры на Scratch',
      icon: 'Gamepad2',
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30'
    },
    {
      id: 'roblox',
      title: 'Roblox Studio',
      age: '10-12 лет', 
      description: 'Создание виртуальной игры на платформе Roblox Studio',
      icon: 'Blocks',
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10',
      borderColor: 'border-neon-pink/30'
    },
    {
      id: 'python-junior',
      title: 'Python Junior',
      age: '11-13 лет',
      description: 'Создание MVP продукта + задачи по кибербезопасности',
      icon: 'Code',
      color: 'text-neon-magenta',
      bgColor: 'bg-neon-magenta/10',
      borderColor: 'border-neon-magenta/30'
    },
    {
      id: 'python-senior',
      title: 'Python Senior',
      age: '14-17 лет',
      description: 'Создание MVP продукта + продвинутые задачи CTF',
      icon: 'Terminal',
      color: 'text-neon-violet',
      bgColor: 'bg-neon-violet/10',
      borderColor: 'border-neon-violet/30'
    }
  ];

  const schedule = [
    {
      date: '17 мая 2025',
      events: [
        { time: '09:00', title: 'Регистрация и приветствие' },
        { time: '10:00', title: 'Объявление тем и начало работы' },
        { time: '12:00', title: 'Обед' },
        { time: '13:00', title: 'Продолжение работы над проектами' },
        { time: '18:00', title: 'Окончание первого дня' }
      ]
    },
    {
      date: '18 мая 2025',
      events: [
        { time: '09:00', title: 'Начало второго дня' },
        { time: '10:00', title: 'Доработка проектов (Scratch/Roblox)' },
        { time: '10:00', title: 'CTF задачи (Python направления)' },
        { time: '15:00', title: 'Презентация проектов' },
        { time: '17:00', title: 'Подведение итогов' }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Можно ли участвовать одному?',
      answer: 'Нет, хакатон проводится только в командах из 2 человек. Это поможет развить навыки командной работы.'
    },
    {
      question: 'Нужно ли приносить свой компьютер?',
      answer: 'В офисе Алгоритмики есть все необходимое оборудование, но вы можете принести свой ноутбук если хотите.'
    },
    {
      question: 'Можно ли использовать ИИ?',
      answer: 'В первый день разрешено использование любых инструментов, включая ИИ. Во второй день запрещено использование ИИ.'
    },
    {
      question: 'Что если я не успею зарегистрироваться?',
      answer: 'Количество мест ограничено (120 участников). Регистрация может закрыться досрочно при достижении лимита.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-purple-900/80 backdrop-blur-lg border-b border-purple-700/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary text-2xl animate-glow-pulse" />
              <span className="text-2xl font-rubik font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                NextGen
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О хакатоне</a>
              <a href="#tracks" className="text-muted-foreground hover:text-primary transition-colors">Направления</a>
              <a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">Расписание</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-violet hover:to-neon-magenta text-white font-medium shadow-lg shadow-neon-purple/50 hover:shadow-neon-pink/70 transition-all duration-300">
              Регистрация
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-float">
              Ноябрь 2025 • Можга
            </Badge>
            <h1 className="text-6xl md:text-8xl font-rubik font-bold mb-6 text-white">
              NextGen
            </h1>
            <h2 className="text-2xl md:text-3xl font-rubik font-medium mb-6 text-white">
              Хакатон по программированию
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Двухдневное соревнование для юных программистов от 8 до 17 лет. 
              Создавай игры, решай задачи по кибербезопасности и выигрывай призы!
            </p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              {[
                { value: timeLeft.days, label: 'дней' },
                { value: timeLeft.hours, label: 'часов' },
                { value: timeLeft.minutes, label: 'минут' },
                { value: timeLeft.seconds, label: 'секунд' }
              ].map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-rubik font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-violet hover:to-neon-magenta text-white font-medium text-lg px-8 py-3 shadow-xl shadow-neon-purple/50 hover:shadow-neon-pink/70 transition-all duration-300">
                <Icon name="UserPlus" className="mr-2" />
                Зарегистрироваться
              </Button>
              <Button size="lg" variant="outline" className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300">
                <Icon name="Download" className="mr-2" />
                Скачать положение
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" className="text-primary" />
                17-18 мая 2025
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" />
                г. Можга, ул. Наговицына, 76
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" className="text-primary" />
                120 мест
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" className="text-primary" />
                Бесплатно
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rubik font-bold mb-4 text-white">
              О хакатоне
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              NextGen — это хакатон для популяризации IT и развития алгоритмического мышления у молодого поколения
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <Icon name="Target" className="text-primary text-3xl mb-3" />
                <CardTitle className="text-xl font-rubik text-white">Цели</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Популяризация IT-технологий</li>
                  <li>• Развитие алгоритмического мышления</li>
                  <li>• Навыки публичных выступлений</li>
                  <li>• Кибербезопасность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-secondary/30 transition-all duration-300">
              <CardHeader>
                <Icon name="Award" className="text-secondary text-3xl mb-3" />
                <CardTitle className="text-xl font-rubik text-white">Призы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ценные призы для победителей</li>
                  <li>• Сертификаты всем участникам</li>
                  <li>• Благодарности наставникам</li>
                  <li>• Профессиональное портфолио</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardHeader>
                <Icon name="Users2" className="text-accent text-3xl mb-3" />
                <CardTitle className="text-xl font-rubik text-white">Команды</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Команды из 2 человек</li>
                  <li>• Возраст от 8 до 17 лет</li>
                  <li>• 4 возрастные категории</li>
                  <li>• Компетентное жюри</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rubik font-bold mb-4 text-white">
              Направления
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбери свое направление в зависимости от возраста и уровня подготовки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <Card key={track.id} className={`bg-card/50 backdrop-blur border-2 ${track.borderColor} hover:${track.bgColor} transition-all duration-300 group`}>
                <CardHeader className="text-center">
                  <Icon name={track.icon as any} className={`${track.color} text-4xl mb-3 mx-auto group-hover:animate-float`} />
                  <CardTitle className="text-xl font-rubik text-white">{track.title}</CardTitle>
                  <Badge variant="outline" className={`${track.color} border-current`}>
                    {track.age}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {track.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rubik font-bold mb-4 text-white">
              Расписание
            </h2>
            <p className="text-lg text-muted-foreground">
              Подробная программа двух дней хакатона
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {schedule.map((day, dayIndex) => (
              <Card key={dayIndex} className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-rubik text-center text-white">
                    {day.date}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start gap-4 p-3 rounded-lg bg-background/50">
                        <Badge variant="outline" className="text-primary border-primary/30 shrink-0">
                          {event.time}
                        </Badge>
                        <span className="text-muted-foreground">{event.title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-rubik font-bold mb-4 text-white">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые популярные вопросы участников
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur rounded-lg border border-border/50 px-6">
                  <AccordionTrigger className="text-left font-rubik font-medium hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-rubik font-bold mb-4 text-white">
            Готов принять вызов?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Регистрация открыта до 15 мая 2025 года. Количество мест ограничено!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-violet hover:to-neon-magenta text-white font-medium text-lg px-8 py-3 animate-glow-pulse shadow-2xl shadow-neon-purple/60 hover:shadow-neon-pink/80 transition-all duration-300">
            <Icon name="Rocket" className="mr-2" />
            Зарегистрироваться сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-purple-900/50 border-t border-purple-700/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary text-2xl" />
                <span className="text-xl font-rubik font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NextGen
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Хакатон по программированию для развития IT-талантов нового поколения
              </p>
            </div>
            
            <div>
              <h3 className="font-rubik font-semibold mb-4 text-primary">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (987) 237-93-66
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  vitaliivodzya@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Можга, ул. Наговицына, 76, офис 5
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-rubik font-semibold mb-4 text-primary">Организатор</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Международная школа программирования и математики Алгоритмика Можга
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple hover:shadow-md hover:shadow-neon-purple/30 transition-all duration-300">
                  <Icon name="MessageCircle" className="mr-1" size={16} />
                  VK
                </Button>
                <Button size="sm" variant="outline" className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink hover:shadow-md hover:shadow-neon-pink/30 transition-all duration-300">
                  <Icon name="Globe" className="mr-1" size={16} />
                  Сайт
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 NextGen Hackathon. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
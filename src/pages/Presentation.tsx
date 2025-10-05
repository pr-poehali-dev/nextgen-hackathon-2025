import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'NEXTGEN',
      subtitle: 'Хакатон по программированию для детей',
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-7xl font-rubik font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            NEXTGEN
          </h1>
          <p className="text-3xl text-green-700">Бизнес-план проекта</p>
          <p className="text-xl text-muted-foreground">17-18 мая 2025, г. Можга</p>
        </div>
      )
    },
    {
      title: 'РЕЗЮМЕ ПРОЕКТА',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-rubik font-bold text-green-800 mb-8">Резюме проекта</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-green-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Users" className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Аудитория</h3>
                    <p className="text-muted-foreground">120 детей 8-17 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Формат</h3>
                    <p className="text-muted-foreground">2 дня интенсивной работы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Target" className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Миссия</h3>
                    <p className="text-muted-foreground">Популяризация IT-образования</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Award" className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Доступ</h3>
                    <p className="text-muted-foreground">Бесплатное участие</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: 'НАПРАВЛЕНИЯ',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-rubik font-bold text-green-800 mb-8">4 направления</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-300">
              <CardContent className="p-6">
                <Icon name="Gamepad2" className="text-green-600 text-4xl mb-3" />
                <h3 className="font-bold text-2xl mb-2">Scratch</h3>
                <p className="text-green-700 font-semibold mb-2">8-10 лет</p>
                <p className="text-muted-foreground">Создание игр на визуальном языке программирования</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-green-300">
              <CardContent className="p-6">
                <Icon name="Blocks" className="text-emerald-600 text-4xl mb-3" />
                <h3 className="font-bold text-2xl mb-2">Roblox Studio</h3>
                <p className="text-emerald-700 font-semibold mb-2">10-12 лет</p>
                <p className="text-muted-foreground">Разработка игр в метавселенной Roblox</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-green-300">
              <CardContent className="p-6">
                <Icon name="Code" className="text-teal-600 text-4xl mb-3" />
                <h3 className="font-bold text-2xl mb-2">Python Junior</h3>
                <p className="text-teal-700 font-semibold mb-2">11-13 лет</p>
                <p className="text-muted-foreground">MVP продукты + основы кибербезопасности</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-green-300">
              <CardContent className="p-6">
                <Icon name="Terminal" className="text-cyan-600 text-4xl mb-3" />
                <h3 className="font-bold text-2xl mb-2">Python Senior</h3>
                <p className="text-cyan-700 font-semibold mb-2">14-17 лет</p>
                <p className="text-muted-foreground">Продвинутые продукты + CTF задачи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: 'ФИНАНСОВЫЙ ПЛАН',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-rubik font-bold text-green-800 mb-8">Финансовый план</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" className="text-green-600" />
                Доходы
              </h3>
              <Card className="bg-green-50 border-green-300">
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Спонсорство</span>
                    <span className="font-bold text-green-700">60,000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Гранты</span>
                    <span className="font-bold text-green-700">40,000 ₽</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 flex justify-between items-center">
                    <span className="font-bold">ИТОГО</span>
                    <span className="font-bold text-2xl text-green-700">100,000 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                <Icon name="TrendingDown" className="text-orange-600" />
                Расходы
              </h3>
              <Card className="bg-orange-50 border-orange-300">
                <CardContent className="p-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Призовой фонд</span>
                    <span className="font-semibold">50,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Оборудование</span>
                    <span className="font-semibold">15,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Маркетинг</span>
                    <span className="font-semibold">10,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сертификаты</span>
                    <span className="font-semibold">10,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Организация</span>
                    <span className="font-semibold">10,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Резерв</span>
                    <span className="font-semibold">5,000 ₽</span>
                  </div>
                  <div className="border-t border-orange-300 pt-2 flex justify-between items-center">
                    <span className="font-bold">ИТОГО</span>
                    <span className="font-bold text-xl text-orange-700">100,000 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'МАРКЕТИНГ',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-rubik font-bold text-green-800 mb-8">Маркетинговая стратегия</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-green-300">
              <CardContent className="p-6">
                <Icon name="Users2" className="text-green-600 text-4xl mb-4" />
                <h3 className="font-bold text-xl mb-3">Целевая аудитория</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Родители детей 8-17 лет</li>
                  <li>• Школы региона</li>
                  <li>• Образовательные центры</li>
                  <li>• IT-сообщество</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-300">
              <CardContent className="p-6">
                <Icon name="Megaphone" className="text-green-600 text-4xl mb-4" />
                <h3 className="font-bold text-xl mb-3">Каналы продвижения</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Социальные сети (VK, Telegram)</li>
                  <li>• Партнёрство со школами</li>
                  <li>• Алгоритмика</li>
                  <li>• Сарафанное радио</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Sparkles" className="text-green-600" />
                Ключевые месседжи
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" />
                  <span>Бесплатное участие</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" />
                  <span>Ценные призы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" />
                  <span>Профессиональное жюри</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" />
                  <span>Реальное портфолио</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'ПОКАЗАТЕЛИ УСПЕХА',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-rubik font-bold text-green-800 mb-8">KPI проекта</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-green-300">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">120</div>
                <p className="text-muted-foreground">Участников</p>
                <p className="text-sm text-green-700 mt-2">100% заполнение</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-300">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">90%+</div>
                <p className="text-muted-foreground">Удовлетворённость</p>
                <p className="text-sm text-green-700 mt-2">По отзывам участников</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-300">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-muted-foreground">Упоминаний</p>
                <p className="text-sm text-green-700 mt-2">В СМИ и соцсетях</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Качественные показатели</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Сообщество</p>
                    <p className="text-sm text-muted-foreground">Создание IT-комьюнити</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Портфолио</p>
                    <p className="text-sm text-muted-foreground">Проекты участников</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Партнёрства</p>
                    <p className="text-sm text-muted-foreground">Для будущих событий</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Репутация</p>
                    <p className="text-sm text-muted-foreground">Положительные отзывы</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'ДОЛГОСРОЧНАЯ СТРАТЕГИЯ',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-rubik font-bold text-green-800 mb-8">Путь к успеху</h2>
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-green-100 to-green-50 border-green-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-2xl font-bold text-green-800">2025 год</h3>
                </div>
                <p className="text-lg text-muted-foreground ml-16">Первый хакатон • 120 участников • Отработка формата</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-emerald-100 to-emerald-50 border-emerald-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-2xl font-bold text-emerald-800">2026 год</h3>
                </div>
                <p className="text-lg text-muted-foreground ml-16">Расширение до 200 участников • Онлайн-трансляция • Новые направления</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-teal-100 to-teal-50 border-teal-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-2xl font-bold text-teal-800">2027 год</h3>
                </div>
                <p className="text-lg text-muted-foreground ml-16">Региональная сеть • 500+ участников • Крупнейший детский IT-хакатон</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: 'ПРИЗЫВ К ДЕЙСТВИЮ',
      content: (
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-rubik font-bold text-green-800 mb-6">Инвестируйте в будущее</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            NextGen - это не просто хакатон. Это инвестиция в новое поколение IT-специалистов.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-green-50 border-green-300">
              <CardContent className="p-6 text-center">
                <Icon name="Heart" className="text-green-600 text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">Социальный эффект</h3>
                <p className="text-muted-foreground">Доступное IT-образование для всех</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-300">
              <CardContent className="p-6 text-center">
                <Icon name="Rocket" className="text-green-600 text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">Потенциал роста</h3>
                <p className="text-muted-foreground">От 120 до 500+ участников за 3 года</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-300">
              <CardContent className="p-6 text-center">
                <Icon name="TrendingUp" className="text-green-600 text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">Масштабирование</h3>
                <p className="text-muted-foreground">Региональная сеть хакатонов</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-xl px-12 py-6 shadow-2xl">
              <Icon name="Mail" className="mr-2" />
              Стать партнёром проекта
            </Button>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="outline" onClick={() => window.location.href = '/'} className="border-green-300">
              <Icon name="ArrowLeft" className="mr-2" />
              На главную
            </Button>
            <div className="text-muted-foreground">
              Слайд {currentSlide + 1} из {slides.length}
            </div>
          </div>

          <Card className="bg-white border-green-300 shadow-2xl min-h-[600px]">
            <CardContent className="p-12">
              {slides[currentSlide].content}
            </CardContent>
          </Card>

          <div className="mt-8 flex items-center justify-between">
            <Button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Icon name="ChevronLeft" className="mr-2" />
              Назад
            </Button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-green-600 w-8' 
                      : 'bg-green-300'
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Далее
              <Icon name="ChevronRight" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
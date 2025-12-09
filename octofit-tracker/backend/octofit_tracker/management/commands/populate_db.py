from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
	help = 'Populate the octofit_db database with test data'

	def handle(self, *args, **options):
		# Clear existing data
		Activity.objects.all().delete()
		User.objects.all().delete()
		Team.objects.all().delete()
		Workout.objects.all().delete()
		Leaderboard.objects.all().delete()

		# Create teams
		Team.objects.create(name='Marvel')
		Team.objects.create(name='DC')

		# Create users
		users = [
			{'name': 'Spider-Man', 'email': 'spiderman@marvel.com', 'team': 'Marvel'},
			{'name': 'Iron Man', 'email': 'ironman@marvel.com', 'team': 'Marvel'},
			{'name': 'Wonder Woman', 'email': 'wonderwoman@dc.com', 'team': 'DC'},
			{'name': 'Batman', 'email': 'batman@dc.com', 'team': 'DC'},
		]
		for u in users:
			User.objects.create(**u)

		# Create activities
		activities = [
			{'user_email': 'spiderman@marvel.com', 'type': 'Running', 'duration': 30, 'calories': 300, 'date': timezone.now().date()},
			{'user_email': 'ironman@marvel.com', 'type': 'Cycling', 'duration': 45, 'calories': 450, 'date': timezone.now().date()},
			{'user_email': 'wonderwoman@dc.com', 'type': 'Swimming', 'duration': 60, 'calories': 600, 'date': timezone.now().date()},
			{'user_email': 'batman@dc.com', 'type': 'Yoga', 'duration': 40, 'calories': 200, 'date': timezone.now().date()},
		]
		for a in activities:
			Activity.objects.create(**a)

		# Create workouts
		Workout.objects.create(name='Cardio Blast', description='High intensity cardio workout', difficulty='Hard')
		Workout.objects.create(name='Strength Builder', description='Strength training for all levels', difficulty='Medium')

		# Create leaderboard
		Leaderboard.objects.create(team='Marvel', points=750)
		Leaderboard.objects.create(team='DC', points=800)

		self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))

import matplotlib.pyplot as plt
from matplotlib.patches import Arc
import numpy as np
import seaborn as sns

# Step 1: Draw the Basketball Court
def draw_court(ax=None, color='black', lw=2):
    if ax is None:
        ax = plt.gca()

    # Draw the hoop
    hoop = plt.Circle((0, 0), radius=7.5, linewidth=lw, color=color, fill=False)

    # Draw backboard
    backboard = plt.Line2D([-30, 30], [-7.5, -7.5], linewidth=lw, color=color)

    # The paint (key area)
    outer_box = plt.Rectangle((-80, -47.5), 160, 190, linewidth=lw, color=color, fill=False)
    free_throw = plt.Circle((0, 142.5), radius=60, linewidth=lw, color=color, fill=False)

    # Three-point line
    three_point = Arc((0, 0), 475, 475, theta1=0, theta2=180, linewidth=lw, color=color)

    court_elements = [hoop, backboard, outer_box, free_throw, three_point]

    # Add the elements to the axis
    for element in court_elements:
        if isinstance(element, plt.Line2D):
            ax.add_line(element)
        else:
            ax.add_patch(element)

    return ax

# Step 2: Plot Shot Data
def plot_shotmap(shot_data):
    # Create the figure and axis
    fig, ax = plt.subplots(figsize=(12, 11))
    ax.set_xlim(-250, 250)
    ax.set_ylim(0, 470)

    # Draw the basketball court
    draw_court(ax)

    # Plot shots
    for shot in shot_data:
        x, y = shot['x'], shot['y']
        made = shot['made']
        missed = shot['missed']

        # Plot made shots in green, missed shots in red
        if made > 0:
            ax.scatter(x, y, c='green', edgecolors='black', linewidth=0.5, s=100, label='Made Shot' if 'Made Shot' not in ax.get_legend_handles_labels()[1] else "")
        elif missed > 0:
            ax.scatter(x, y, c='red', edgecolors='black', linewidth=0.5, s=100, label='Missed Shot' if 'Missed Shot' not in ax.get_legend_handles_labels()[1] else "")

    # Adding legend for the plot
    plt.legend()
    plt.title('Team Shotmap')
    plt.xlabel('Court Width')
    plt.ylabel('Court Height')
    plt.show()

# Step 3: Create Heatmap of Shot Density
def plot_heatmap(shot_data, ax=None):
    if ax is None:
        ax = plt.gca()

    # Extract shot coordinates
    x_coords = [shot['x'] for shot in shot_data]
    y_coords = [shot['y'] for shot in shot_data]

    # Create a 2D histogram for the shot attempts
    heatmap_data, x_edges, y_edges = np.histogram2d(x_coords, y_coords, bins=(30, 30))

    # Plot heatmap with Seaborn
    sns.heatmap(heatmap_data.T, cmap='Blues', ax=ax, cbar=True, alpha=0.6)

# Step 4: Putting It All Together
def main():
    # Example shot data (replace with your shot data)
    home_shot_data = [{"x":-233,"y":-2,"made":1,"missed":1,"saved":0},{"x":-199,"y":0,"made":0,"missed":1,"saved":0},{"x":-167,"y":-4,"made":0,"missed":1,"saved":0},{"x":-140,"y":190,"made":1,"missed":0,"saved":0},{"x":-138,"y":6,"made":0,"missed":1,"saved":0},{"x":-121,"y":4,"made":1,"missed":0,"saved":0},{"x":-119,"y":-15,"made":0,"missed":1,"saved":0},{"x":-114,"y":212,"made":1,"missed":0,"saved":0},{"x":-112,"y":54,"made":0,"missed":1,"saved":0},{"x":-86,"y":34,"made":0,"missed":1,"saved":0},{"x":-69,"y":76,"made":0,"missed":1,"saved":0},{"x":-52,"y":26,"made":1,"missed":0,"saved":0},{"x":-48,"y":99,"made":0,"missed":1,"saved":0},{"x":-43,"y":15,"made":1,"missed":0,"saved":0},{"x":-43,"y":52,"made":0,"missed":1,"saved":0},{"x":-37,"y":19,"made":1,"missed":0,"saved":0},{"x":-34,"y":9,"made":1,"missed":1,"saved":0},{"x":-34,"y":11,"made":1,"missed":0,"saved":0},{"x":-32,"y":6,"made":1,"missed":0,"saved":0},{"x":-30,"y":13,"made":1,"missed":0,"saved":0},{"x":-28,"y":21,"made":1,"missed":0,"saved":0},{"x":-26,"y":24,"made":1,"missed":0,"saved":0},{"x":-17,"y":26,"made":1,"missed":0,"saved":0},{"x":-17,"y":158,"made":1,"missed":0,"saved":0},{"x":-9,"y":24,"made":1,"missed":0,"saved":0},{"x":-9,"y":32,"made":1,"missed":0,"saved":0},{"x":-4,"y":0,"made":1,"missed":0,"saved":0},{"x":-2,"y":6,"made":1,"missed":0,"saved":0},{"x":19,"y":39,"made":1,"missed":0,"saved":0},{"x":30,"y":17,"made":1,"missed":0,"saved":0},{"x":34,"y":11,"made":1,"missed":0,"saved":0},{"x":37,"y":13,"made":1,"missed":0,"saved":0},{"x":37,"y":37,"made":0,"missed":1,"saved":0},{"x":39,"y":26,"made":1,"missed":0,"saved":0},{"x":39,"y":50,"made":2,"missed":0,"saved":0},{"x":41,"y":19,"made":0,"missed":1,"saved":0},{"x":43,"y":21,"made":0,"missed":1,"saved":0},{"x":50,"y":24,"made":0,"missed":1,"saved":0},{"x":52,"y":15,"made":1,"missed":0,"saved":0},{"x":54,"y":41,"made":0,"missed":1,"saved":0},{"x":58,"y":24,"made":0,"missed":1,"saved":0},{"x":60,"y":45,"made":0,"missed":1,"saved":0},{"x":65,"y":82,"made":0,"missed":1,"saved":0},{"x":69,"y":28,"made":0,"missed":1,"saved":0},{"x":73,"y":238,"made":1,"missed":0,"saved":0},{"x":78,"y":21,"made":1,"missed":0,"saved":0},{"x":119,"y":108,"made":0,"missed":1,"saved":0},{"x":123,"y":37,"made":1,"missed":0,"saved":0},{"x":132,"y":208,"made":1,"missed":0,"saved":0},{"x":158,"y":190,"made":1,"missed":0,"saved":0},{"x":212,"y":117,"made":0,"missed":1,"saved":0},{"x":240,"y":-24,"made":0,"missed":1,"saved":0},{"x":247,"y":4,"made":0,"missed":1,"saved":0}]

    # Plot shotmap
    plot_shotmap(home_shot_data)

    # Plot shotmap with heatmap
    fig, ax = plt.subplots(figsize=(12, 11))
    ax.set_xlim(-250, 250)
    ax.set_ylim(0, 470)
    draw_court(ax)
    plot_heatmap(home_shot_data, ax)
    plt.title('Shot Density Heatmap')
    plt.xlabel('Court Width')
    plt.ylabel('Court Height')
    plt.show()

if __name__ == "__main__":
    main()
